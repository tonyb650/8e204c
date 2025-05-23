import type { ActionBlueprint } from "../types/actionBlueprint"
import type { Edge } from "../types/edge"
import type { Node } from '../types/node'

const getUpstreamNodes = (actionBlueprint: ActionBlueprint, nodeId: string): Node[] => {
  if (!actionBlueprint?.nodes || !actionBlueprint?.edges) {
    throw new Error('Invalid action blueprint: missing nodes or edges')
  }

  const targetNode = actionBlueprint.nodes.find(node => node.id === nodeId)
  if (!targetNode) {
    throw new Error(`Node with ID ${nodeId} not found in the blueprint`)
  }

  // Helper function to find upstream nodes recursively
  const findUpstreamNodes = ( edges: Edge[], currentNodeId: string, visited = new Set<string>() ): Set<string> => {
    if (visited.has(currentNodeId)) return visited
    
    visited.add(currentNodeId)
    
    const upstreamEdges = edges.filter(edge => edge.target === currentNodeId)
    for (const edge of upstreamEdges) {
      findUpstreamNodes(edges, edge.source, visited)
    }
    
    return visited
  }

  const upstreamNodeIds = findUpstreamNodes(actionBlueprint.edges, nodeId)
  
  // Convert Set of IDs to nodes and filter out the target node
  return Array.from(upstreamNodeIds)
    .map(id => actionBlueprint.nodes.find(node => node.id === id))
    .filter((node): node is Node => node !== undefined && node.id !== nodeId)
}

export default getUpstreamNodes