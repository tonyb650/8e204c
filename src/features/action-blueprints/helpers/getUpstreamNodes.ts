import type { ActionBlueprint } from "../types/actionBlueprint"
import type { Edge } from "../types/edge"
import type { Node } from '../types/node'

const getUpstreamNodes = (actionBlueprint: ActionBlueprint, nodeId: string): { directUpstreamNodes: Node[], transitiveUpstreamNodes: Node[] } => {
  if (!actionBlueprint?.nodes || !actionBlueprint?.edges) {
    throw new Error('Invalid action blueprint: missing nodes or edges')
  }

  const targetNode = actionBlueprint.nodes.find(node => node.id === nodeId)
  if (!targetNode) {
    throw new Error(`Node with ID ${nodeId} not found in the blueprint`)
  }

  // Helper function to find upstream nodes
  const findUpstreamNodes = (edges: Edge[], startNodeId: string): Node [] => {
    const visited = new Set<string>();
    const stack = [startNodeId];

    while (stack.length > 0) {
      const currentNodeId = stack.pop();
      if (!currentNodeId || visited.has(currentNodeId)) continue;

      visited.add(currentNodeId);

      const upstreamEdges = edges.filter(edge => edge.target === currentNodeId);
      for (const edge of upstreamEdges) {
        if (!visited.has(edge.source)) {
          stack.push(edge.source);
        }
      }
    }
    
    return [...visited]
      .filter(node => node !== startNodeId)
      .map(id => actionBlueprint.nodes.find(node => node.id === id))
      .filter(node => node !== undefined) // filter out nodes that are not found. Is there a cleaner way to do this?
  }

  const allUpstreamNodes = findUpstreamNodes(actionBlueprint.edges, nodeId)
  const directUpstreamNodes = actionBlueprint.edges
    .filter(edge => edge.target === nodeId)
    .map(edge => actionBlueprint.nodes.find(node => node.id === edge.source))
    .filter(node => node !== undefined)

  const transitiveUpstreamNodes = allUpstreamNodes.filter(node => !directUpstreamNodes.find(directNode => directNode?.id === node.id))
  
  return { directUpstreamNodes, transitiveUpstreamNodes }
}

export default getUpstreamNodes