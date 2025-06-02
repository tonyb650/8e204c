import { render, screen } from '@testing-library/react'
import NodeCard from '@/features/action-blueprints/components/NodeCard'
import type { Node } from '@/features/action-blueprints/types/node'
import { MemoryRouter } from 'react-router'
import { data } from '../../../mocks/data'

const SAMPLE_NODE: Node = data.nodes[0] as Node

describe('NodeCard', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <NodeCard node={SAMPLE_NODE} />
      </MemoryRouter>
    )

    const node = screen.queryByRole('link')
    expect(node).toHaveTextContent( SAMPLE_NODE.data.name)
  })
})
