import { useParams, useSearchParams } from 'react-router'
import { useMemo } from 'react'
import { GLOBAL_SOURCES } from '../constants/globalDataSources'
import getUpstreamNodes from '../helpers/getUpstreamNodes'
import type { Form } from '../types/form'
import type { Node } from '../types/node'
import type { DataElement, DataSource } from '../types/prefill'
import useActionBlueprint from './useActionBlueprint'

type NodeSourceFilter = 'global' | 'direct' | 'transitive'

const useSources = (): { sources: DataSource[] } => {
  const { nodeId } = useParams()
  const { actionBlueprint } = useActionBlueprint()
  const [searchParams] = useSearchParams()

  const filterQueryString = searchParams.get('filter')
  const filters: NodeSourceFilter[] | null = filterQueryString ? filterQueryString.split(',') as NodeSourceFilter[] : null

  /* Helper function to convert a list of nodes to a list of DataSource objects */
  const nodesToDataSource = (nodes: Node[]): DataSource[] => {
    // handle case where actionBlueprint is not loaded
    if (!actionBlueprint) {
      return []
    }

    return nodes.map((node: Node) => {

      // Determine the form that the given node is associated with
      const sourceForm = actionBlueprint.forms?.find((form: Form) => form.id === node.data.component_id)
      const sourceFormProperties = sourceForm?.field_schema.properties || {}
      
      // Create the DataElement objects for each property in the form
      const sourceFields: DataElement[] = Object.keys(sourceFormProperties).map((property: string) => ({
        id: node.id,
        label: property
      }))
  
      // Mapping the node to a DataSource object
      return {
        id: node.id,
        title: node.data.name,
        dataElements: sourceFields
      }
    })
  } 

  /* Main hook to get the sources */
  const sources = useMemo(() => {
    if (!actionBlueprint || !nodeId) {
      return GLOBAL_SOURCES
    }
    
    // Convert get direct and transitive upstream nodes
    const {directUpstreamNodes, transitiveUpstreamNodes} = getUpstreamNodes(actionBlueprint, nodeId)

    // Convert nodes to DataSource objects
    const transitiveUpstreamSources = nodesToDataSource(transitiveUpstreamNodes)
    const directUpstreamSources = nodesToDataSource(directUpstreamNodes)

    // Filter the sources based on the filters
    const filteredSources = []
    if(!filters || filters.includes("global")) {
      filteredSources.push(...GLOBAL_SOURCES)
    }
    if(!filters || filters.includes("transitive")) {
      filteredSources.push(...transitiveUpstreamSources)
    }
    if(!filters || filters.includes("direct")) {
      filteredSources.push(...directUpstreamSources)
    }

    // TODO: sort the sources before returning?
    return filteredSources
  }, [actionBlueprint, nodeId, searchParams])

  return { sources }
}

export default useSources


