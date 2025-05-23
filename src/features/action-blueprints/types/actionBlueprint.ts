import { type Node } from "./node";
import { type Form } from "./form";
import { type Edge } from "./edge";

export type ActionBlueprint = {
  $schema: string;
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  category: string;
  nodes: Node[];
  forms: Form[];
  edges: Edge[];
  branches: [];
  triggers: [];
}
