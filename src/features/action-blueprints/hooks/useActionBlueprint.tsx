import { useEffect, useState } from "react"
import { getActionBlueprint } from "../services/action-blueprint"
import type { ActionBlueprint } from "../types/actionBlueprint"

// TODO: add error handling & loading state
const useActionBlueprint = () => {
  const [actionBlueprint, setActionBlueprint] = useState<ActionBlueprint | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActionBlueprint()
      setActionBlueprint(data)
    }
    fetchData()
  }, [])

  return { actionBlueprint }
}

export default useActionBlueprint
