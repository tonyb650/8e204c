import NodeCard from '@/features/action-blueprints/components/NodeCard'
import { Button } from '@headlessui/react'
import { Link } from 'react-router'
import useActionBlueprint from '../features/action-blueprints/hooks/useActionBlueprint'
import { type Node } from '../features/action-blueprints/types/node'


const GraphPage = () => {
  const {actionBlueprint} = useActionBlueprint()

  const nodes: Node[] = actionBlueprint?.nodes.sort((a: Node, b: Node) => a.data.name.localeCompare(b.data.name)) || []

  if (!actionBlueprint) return <div>Loading...</div>

  return (
    <div className='max-w-2xl m-2 border rounded-lg flex flex-col gap-2 p-2'>
      <header>
        <h1 className='text-2xl font-bold'>Action Blueprint Graph: {actionBlueprint?.name}</h1>
        <h2 className='text-lg'>Description: {actionBlueprint?.description}</h2>
        <h3 className='text-sm'>Category: {actionBlueprint?.category}</h3>
        <h3 className='text-sm'>{actionBlueprint?.nodes.length} nodes</h3>
      </header>
      {nodes.map((node) => (
        <NodeCard key={node.id} node={node} />
      ))}
      <Button as={Link} to="/" className={"max-w-36 flex justify-center border border-gray-300 rounded shadow"}>Return to Home</Button>
    </div>
  )
}

export default GraphPage