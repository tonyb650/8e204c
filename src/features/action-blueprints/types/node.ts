type Position = {
  x: number;
  y: number;
}

type NodeData = {
  id: string;
  component_key: string;
  component_type: "form" | "branch" | "trigger" | "configuration";
  component_id: string;
  name: string;
  prerequisites: string[];
  permitted_roles: string[];
  input_mapping: Record<string, any>;
  sla_duration: {
    number: number;
    unit: string;
  };
  approval_required: boolean;
  approval_roles: string[];
}

export type Node = {
  id: string;
  type: string;
  position: Position;
  data: NodeData;
}