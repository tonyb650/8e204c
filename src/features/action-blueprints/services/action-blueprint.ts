
import { baseApi } from "../../../services/baseApi";
import type { ActionBlueprint } from "../types/actionBlueprint";
// import { data } from "./server-data";


export function getActionBlueprint() {
  // return data // To bypass the server call, uncomment this line & the import above
  return baseApi.get<ActionBlueprint>(`/api/v1/id/actions/blueprints/id/graph`).then(res => res.data) 
}