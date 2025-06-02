import type { Form } from "@/features/action-blueprints/types/form";
import type { Node } from "@/features/action-blueprints/types/node";
import PrefillFieldButton from "@/features/action-blueprints/components/PrefillFieldButton";
import useActionBlueprint from "@/features/action-blueprints/hooks/useActionBlueprint";
import { Link, useParams } from "react-router";
import SlideSwitch from "@/components/SlideSwitch";
import { useState } from "react";
import { Button } from "@headlessui/react";

const PrefillAssignmentPage = () => {
  const { nodeId } = useParams()
  const { actionBlueprint } = useActionBlueprint()
  const [prefillEnabled, setPrefillEnabled] = useState(false)

  const targetNode = actionBlueprint?.nodes.find((node: Node) => node.id === nodeId)
  const form = actionBlueprint?.forms?.find((form: Form) => form.id === targetNode?.data.component_id)
  
  if ( !actionBlueprint ) return <div>Loading...</div>;
  if ( ! nodeId || !form ) return <div>No valid node or form found...</div>;
  
  return (
    <div className='w-full max-w-2xl m-2 border rounded-lg flex flex-col gap-2 p-2'>
      <h1 className="text-2xl font-bold">Prefills for {targetNode?.data.name}</h1>
      <div className="flex items-center gap-2 justify-between">
        <div>Prefill fields for this form</div>
        <SlideSwitch enabled={prefillEnabled} onChange={() => setPrefillEnabled(prev => !prev)} />
      </div>
      <div className="max-w-md flex flex-col gap-2 m-2">
        {Object
        .keys(form?.field_schema.properties || {})
        .map((field_schema_property, index) => {
          return (
            <PrefillFieldButton key={index} elementLabel={field_schema_property} disabled={!prefillEnabled} />
          )
        })}
      </div>

      <Button as={Link} to="/nodes" className={"max-w-36 flex justify-center border border-gray-300 rounded shadow"}>Return to Graph</Button>

    </div>
  );
};

export default PrefillAssignmentPage