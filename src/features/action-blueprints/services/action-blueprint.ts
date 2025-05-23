
import { baseApi } from "../../../services/baseApi";
import type { ActionBlueprint } from "../types/actionBlueprint";


export function getActionBlueprint() {
  return baseApi.get<ActionBlueprint>(`/api/v1/id/actions/blueprints/id/graph`).then(res => res.data) 
}