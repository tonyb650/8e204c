import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import SearchField from '@/components/SearchField'
import AccordionSelect from '@/components/AccordionSelect'
import { cn } from '@/utils/shadCNUtils'
import { useParams } from 'react-router'
import useActionBlueprint from '../hooks/useActionBlueprint'
import type { Node } from '../types/node'
import useSources from '../hooks/useSources'
import { usePrefillMappings } from '../context/PrefillContext'
import type { DataElement, DataSource, PrefillMapping } from '../types/prefill'
import { MoveDown } from 'lucide-react'

type PrefillConfigModalProps = {
  children: React.ReactNode, 
  targetElementLabel: string, 
  disabled?: boolean
  className?: string, 
}

const PrefillConfigModal = ({children, targetElementLabel, disabled = false, className }: PrefillConfigModalProps) => {
  const {nodeId} = useParams()
  const { state, dispatch } = usePrefillMappings()
  const { sources } = useSources()
  const [isOpen, setIsOpen] = useState(false)
  const [sourceElement, setSourceElement] = useState<DataElement | null>(null)
  
  useEffect(() => {
    if (state) {
      const existingMapping:PrefillMapping | undefined = state.prefillMappings.find((prefill) => prefill.target.id === nodeId && prefill.target.label === targetElementLabel)
      const existingSource:DataSource | undefined = sources.find((source) => source.id === existingMapping?.source.id)
      const existingSourceDataElement:DataElement | undefined = existingSource?.dataElements.find((element) => element.id === existingMapping?.source.id)
      setSourceElement(existingSourceDataElement || null)
    }
  }, [state])

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const handleSelectSource = (dataElement: DataElement) => {
    setSourceElement(dataElement)
  }
  
  const handleSaveMapping = () => {
    if (sourceElement && nodeId) {
      const newPrefill: PrefillMapping = {
        source: { id: sourceElement?.id, label: sourceElement?.label },
        target: { id: nodeId, label: targetElementLabel },
      }
      dispatch({ type: "SET_PREFILL_MAPPING", payload: newPrefill })
      close()
    } else {
      alert("Unable to save prefill mapping")
    }
  };

  return (
    <>
      <Button
        type="button"
        disabled={disabled}
        onClick={open}
        className={cn(
          "w-full text-left transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
      >
        {children}
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/30">
            <DialogPanel
              transition
              className="flex flex-col w-full max-w-2xl h-[calc(100vh-15rem)] border border-gray-300 rounded-sm bg-white duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 p-2">
                Select data element to map
              </DialogTitle>
              <div className="grid grid-cols-2 border-b border-t border-gray-300 flex-grow overflow-y-scroll" >
                <aside className="p-3 border-r border-gray-300 bg-gray-100 space-y-2">
                  <div>Available Data</div>
                  <SearchField/>
                  <AccordionSelect groups={sources} onSelect={handleSelectSource}/>
                </aside>

                {sourceElement && <PreviewPrefill sourceElement={sourceElement} targetElementLabel={targetElementLabel} />}
              </div>
              <div className="flex justify-end gap-2 m-1">
                <Button
                  type="button"
                  className="uppercase inline-flex items-center gap-2 rounded bg-white px-3 py-1.5 text-sm/6 shadow-sm border border-blue-400 text-blue-400 font-semibold hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={close}
                >
                  Cancel
                </Button>
                <Button 
                  type="button"
                  disabled={!sourceElement}
                  className="uppercase inline-flex items-center gap-2 rounded bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSaveMapping}
                >
                  Select
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}





type PreviewPrefillProps = {
  sourceElement: DataElement,
  targetElementLabel: string
}

const PreviewPrefill = ({sourceElement,targetElementLabel}: PreviewPrefillProps) => {
  const { nodeId } = useParams()
  const { actionBlueprint } = useActionBlueprint()
  const { sources } = useSources()
  const targetNode = actionBlueprint?.nodes.find((node: Node) => node.id === nodeId)
  const sourceTitle = sources.find((source: DataSource) => source.id === sourceElement.id)?.title

  if (!sourceElement ) return null
  if (!targetNode || !sourceTitle) return <div>Loading...</div>
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <DataElementCard title="Source" dataSourceTitle={sourceTitle || ""} dataElementLabel={sourceElement.label} />
      <MoveDown/>
      <DataElementCard title="Target" dataSourceTitle={targetNode?.data.name || ""} dataElementLabel={targetElementLabel} />
    </div>
  )
}





type DataElementCardProps = {
  title: "Source" | "Target",
  dataSourceTitle: string,
  dataElementLabel: string
}

const DataElementCard = ({title, dataSourceTitle, dataElementLabel}: DataElementCardProps) => {
  return (
    <div className="max-w-full border rounded-sm divide-y divide-gray-300 p-2 overflow-x-auto">
      <div className='text-sm font-semibold'>{title}</div>
      <div className=''>{dataSourceTitle}: <span className='font-bold'>{dataElementLabel}</span></div>
    </div>
  )
}


export default PrefillConfigModal