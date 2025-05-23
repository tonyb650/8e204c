
import { baseApi } from "../../../services/baseApi";
import type { ActionBlueprint } from "../types/actionBlueprint";
import { data } from "./server-data";

const BYPASS_SERVER = import.meta.env.VITE_USE_CONSTANT_INSTEAD_OF_MOCK_SERVER === "true"

export function getActionBlueprint() {
  if (BYPASS_SERVER) {
    return data 
  } else {
    return baseApi.get<ActionBlueprint>(`/api/v1/id/actions/blueprints/id/graph`).then(res => res.data) 
  }
}