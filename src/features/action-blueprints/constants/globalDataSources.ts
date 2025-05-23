import type { DataElement, DataSource } from "../types/prefill"

/*
  This is a list of fictitious global data sources that are available as prefills for all nodes.
*/

const globalItems1: DataElement[] = [
  { id:"global_source_1", label: "global_data_1a"},
  { id:"global_source_1", label: "global_data_1b"},
]
const globalItems2: DataElement[] = [
  { id:"global_source_2", label: "global_data_2a"},
  { id:"global_source_2", label: "global_data_2b"},

]

export const GLOBAL_SOURCES: DataSource[] = [
  {id: "global_source_1", title: "Action Properties", dataElements: globalItems1},
  {id: "global_source_2", title: "Client Properties", dataElements: globalItems2},
]
