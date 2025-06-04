import { Database, X } from "lucide-react"
import { useParams } from "react-router"
import { cn } from "../../../utils/shadCNUtils"
import { usePrefillMappings } from "../context/PrefillContext"
import useSourceDisplay, { type SourceDisplay } from "../hooks/useSourceDisplay"
import PrefillConfigModal from "./PrefillConfigModal"

type Variant = "dynamic" | "static"

type PrefillFieldButtonProps = {
  elementLabel: string
  disabled?: boolean
  className?: string
  onClear?: () => void
}

const PrefillFieldButton = ({elementLabel, disabled, className, onClear}: PrefillFieldButtonProps) => {
  const { nodeId } = useParams()
  const { dispatch } = usePrefillMappings()
  const { sourceDisplay } = useSourceDisplay()

  const sourcePrefill: SourceDisplay | undefined = sourceDisplay(nodeId, elementLabel)
  const variant: Variant = elementLabel.includes("dynamic") ? "dynamic" : "static"

  const variantStyle = (variant: Variant): string => {
    switch (variant) {
      case 'dynamic':
        return "rounded-sm border-2 border-dotted border-gray-300 focus:border-2 focus:border-blue-300"
      case 'static':
        return "rounded-full"
      default:
        return "text-center text-grey-800"
    } 
  }
  
  const clearPrefill = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    dispatch({ type: 'REMOVE_PREFILL_MAPPING', payload: {target_node_id: nodeId!, target_property_name: elementLabel} })
    onClear?.()
  }

  if (!nodeId) {
    return (
      <div role="alert" className="text-red-500">
        Error: Missing nodeId parameter
      </div>
    )
  }

  return (
    <PrefillConfigModal
      disabled={disabled}
      targetElementLabel={elementLabel}
      className={cn(
        "px-3 py-1 flex items-center justify-between gap-2 w-full text-left bg-gray-200 focus:outline-none focus:bg-blue-100 hover:bg-black/30",
        variantStyle(variant),
        className
      )}
    >
      <div className={cn("flex items-center gap-2")}>
        {variant === "dynamic" && <Database className="w-4 h-4" aria-hidden="true" />}
        <span>{elementLabel}</span>
        {sourcePrefill && (
          <div className="text-xs text-gray-500">{`${sourcePrefill.title}.${sourcePrefill.label}`}</div>
        )}
      </div>
      {sourcePrefill && (
        <span
          onClick={clearPrefill}
          className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
          aria-label={`Clear prefill for ${elementLabel}`}
        >
          <X className="w-6 h-6 p-1 text-gray-300 bg-gray-400 rounded-full hover:bg-gray-500" aria-hidden="true" />
        </span>
      )}
    </PrefillConfigModal>
  );
}

export default PrefillFieldButton