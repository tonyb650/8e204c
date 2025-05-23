import { useParams } from 'react-router'
import { useMemo } from 'react'
import { GLOBAL_SOURCES } from '../constants/globalDataSources'
import getUpstreamNodes from '../helpers/getUpstreamNodes'
import type { Form } from '../types/form'
import type { Node } from '../types/node'
import type { DataElement, DataSource } from '../types/prefill'
import useActionBlueprint from './useActionBlueprint'

const useSources = (): { sources: DataSource[] } => {
  const { nodeId } = useParams()
  const { actionBlueprint } = useActionBlueprint()

  const sources = useMemo(() => {
    if (!actionBlueprint || !nodeId) {
      return GLOBAL_SOURCES
    }
    
    // Convert upstream nodes to DataSource objects
    const upstreamNodes = getUpstreamNodes(actionBlueprint, nodeId)
    const upstreamSources: DataSource[] = upstreamNodes.map((node: Node) => {
      const sourceForm = actionBlueprint.forms?.find((form: Form) => form.id === node.data.component_id)
      const properties = sourceForm?.field_schema.properties || {}
      
      const sourceFields: DataElement[] = Object.keys(properties).map((property: string) => ({
        id: node.id,
        label: property
      }))

      return {
        id: node.id,
        title: node.data.name,
        dataElements: sourceFields
      }
    })

    return [...GLOBAL_SOURCES, ...upstreamSources]
  }, [actionBlueprint, nodeId])

  return { sources }
}

export default useSources


