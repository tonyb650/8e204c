import { Button } from "@headlessui/react"
import { TableProperties } from "lucide-react"
import { Link } from "react-router"
import type { Node } from "../types/node"
import { cn } from "../../../utils/shadCNUtils"

const NodeCard = ({ node }: { node: Node }) => {
  return (
    <Button
      as={Link}
      className={cn(
        "flex items-center w-48 p-1 border border-gray-300 rounded-lg shadow-sm"
      )}
      to={`/nodes/${node.id}/prefill`}
    >
      <TableProperties className="p-2 w-8 h-8 bg-blue-500 text-white rounded-md mr-2" />
      <div className="flex flex-col ">
        <div className="text-xs capitalize -mb-0.5">
          {node.data.component_type}
        </div>
        <div className="text-sm">
          {node.data.name} ({node.data.component_id.slice(-4)})
        </div>
      </div>
    </Button>
  )
}

export default NodeCard
