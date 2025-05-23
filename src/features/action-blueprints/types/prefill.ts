type DataElement = {
  id: string;
  label: string;
}

type DataSource = {
  id: string;
  title: string;
  dataElements: DataElement[];
}

type PrefillMapping = {
  source: DataElement;
  target: DataElement;
}

export type { DataSource, DataElement, PrefillMapping };