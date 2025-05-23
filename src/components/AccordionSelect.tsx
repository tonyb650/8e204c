import { ChevronRight } from 'lucide-react'
import { useState, useCallback, memo } from 'react'
import { cn } from '../utils/shadCNUtils'
import { Button } from '@headlessui/react'
import type { DataElement, DataSource } from '@/features/action-blueprints/types/prefill'

export type AccordionGroup = DataSource

type AccordionSelectProps = {
  groups: AccordionGroup[]
  onSelect: (dataElement: DataElement) => void
  isLoading?: boolean
  error?: string
}

const AccordionSelect = memo(({ groups, onSelect, isLoading, error }: AccordionSelectProps) => {
  if (isLoading) return <div className="pl-2 py-4 text-gray-500" role="status">Loading...</div>
  if (error) return <div className="pl-2 py-4 text-red-500" role="alert">{error}</div>
  if (!groups?.length) return <div className="pl-2 py-4 text-gray-500">No data available</div>

  return (
    <div className="pl-2" role="list">
      {groups.map((group, index) => (
        <Accordion
          key={index}
          group={group}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
})


type AccordionProps = { 
  group: AccordionGroup
  onSelect: (dataElement: DataElement) => void
}

const Accordion = memo(({ group, onSelect }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setAccordionOpen(prev => !prev)
  }, [])

  const handleSelect = useCallback((dataElement: DataElement) => {
    onSelect(dataElement)
  }, [onSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }, [handleToggle])

  return (
    <div className="py-2">
      <Button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex gap-2 px-2 py-0.5 rounded focus:outline-none focus:bg-blue-100 hover:bg-black/30 cursor-pointer"
      >
        <ChevronRight
          className={cn(
            "transform origin-center transition duration-200 ease-out",
            { "rotate-90": accordionOpen }
          )}
          aria-hidden="true"
        />
        <span>{group.title}</span>
      </Button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {accordionOpen && (
          <div className="ml-8 overflow-hidden">
            {group.dataElements?.map((dataElement, index) => (
              <Button
                key={index}
                onClick={() => handleSelect(dataElement)}
                className="w-full text-left px-2 py-0.5 rounded focus:outline-none focus:bg-blue-100 hover:bg-black/30 cursor-pointer"
              >
                {dataElement.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
})

export default AccordionSelect
