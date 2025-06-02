import { renderHook, act } from '@testing-library/react'
import { usePrefillMappings, PrefillProvider } from '@/features/action-blueprints/context/PrefillContext'
import { type DataElement, type PrefillMapping } from '@/features/action-blueprints/types/prefill'

describe('PrefillContext', () => {

  const sourceDataElement: DataElement = {
    id: 'source1',
    label: 'sourceLabel',
  }
  const targetDataElement: DataElement = {
    id: 'target1',
    label: 'targetLabel',
  }
  const mockPrefillMapping: PrefillMapping = {
    source: sourceDataElement,
    target: targetDataElement
  }

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <PrefillProvider>{children}</PrefillProvider>
  )

  it('should initialize with empty prefill mappings', () => {
    const { result } = renderHook(() => usePrefillMappings(), { wrapper })
    expect(result.current.state.prefillMappings).toEqual([])
  })

  it('should add a prefill mapping when SET_PREFILL_MAPPING is dispatched', () => {
    const { result } = renderHook(() => usePrefillMappings(), { wrapper })

    act(() => {
      result.current.dispatch({
        type: 'SET_PREFILL_MAPPING',
        payload: mockPrefillMapping
      })
    })

    expect(result.current.state.prefillMappings).toHaveLength(1)
    expect(result.current.state.prefillMappings[0]).toEqual(mockPrefillMapping)
  })

  it('should remove a prefill mapping when REMOVE_PREFILL_MAPPING is dispatched', () => {
    const { result } = renderHook(() => usePrefillMappings(), { wrapper })

    // First add a mapping
    act(() => {
      result.current.dispatch({
        type: 'SET_PREFILL_MAPPING',
        payload: mockPrefillMapping
      })
    })

    // Then remove it
    act(() => {
      result.current.dispatch({
        type: 'REMOVE_PREFILL_MAPPING',
        payload: {
          target_node_id: mockPrefillMapping.target.id,
          target_property_name: mockPrefillMapping.target.label
        }
      })
    })

    expect(result.current.state.prefillMappings).toHaveLength(0)
  })

  it('should not remove a prefill mapping when target node id and property name do not match', () => {
    const { result } = renderHook(() => usePrefillMappings(), { wrapper })

    // First add a mapping
    act(() => {
      result.current.dispatch({
        type: 'SET_PREFILL_MAPPING',
        payload: mockPrefillMapping
      })
    })

    // Try to remove with non-matching values
    act(() => {
      result.current.dispatch({
        type: 'REMOVE_PREFILL_MAPPING',
        payload: {
          target_node_id: 'non-matching-id',
          target_property_name: 'non-matching-label'
        }
      })
    })

    expect(result.current.state.prefillMappings).toHaveLength(1);
    expect(result.current.state.prefillMappings[0]).toEqual(mockPrefillMapping)
  })

  it('should throw error when usePrefillMappings is used outside of PrefillProvider', () => {
    expect(() => {
      renderHook(() => usePrefillMappings())
    }).toThrow('usePrefill must be used within a PrefillProvider')
  })
}) 