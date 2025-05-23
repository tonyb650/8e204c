import useSources from './useSources'
import { usePrefillMappings } from '../context/PrefillContext'
import type { DataSource, PrefillMapping } from '../types/prefill'

export type SourceDisplay = {
  title: string
  label: string
}

type UseSourceDisplayReturn = {
  sourceDisplay: (nodeId?: string, elementLabel?: string) => SourceDisplay | undefined
}

const useSourceDisplay = (): UseSourceDisplayReturn => {
  const { sources } = useSources()
  const { state } = usePrefillMappings()

  const sourceDisplay = (nodeId?: string, elementLabel?: string): SourceDisplay | undefined => {
    if (!nodeId || !elementLabel) {
      return undefined
    }

    const matchingPrefill = state.prefillMappings.find(
      (prefill: PrefillMapping) => 
        prefill.target.id === nodeId && 
        prefill.target.label === elementLabel
    )

    if (!matchingPrefill) {
      return undefined
    }

    const matchingSource = sources.find(
      (source: DataSource) => source.id === matchingPrefill.source.id
    )

    if (!matchingSource?.title) {
      return undefined
    }

    return {
      title: matchingSource.title,
      label: matchingPrefill.source.label
    }
  }

  return { sourceDisplay }
}

export default useSourceDisplay
