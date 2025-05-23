import { type JsonSchema, type UISchemaElement } from "@jsonforms/core";

type UISchemaElementCustom = UISchemaElement & {
  scope: string;
  label: string;
}

type UISchema = {
  type: "VerticalLayout" | "HorizontalLayout";
  elements: UISchemaElementCustom[];
};

type DynamicFieldConfig = {
  selector_field: string;
  payload_fields: {
    [key: string]: {
      type: string;
      value: string;
    };
  };
  endpoint_id: string;
};

type AvantosJsonSchema = JsonSchema & {
  properties?: {
    [key: string]: JsonSchema & {
      avantos_type?: string;
    };
  };
};

export type Form = {
  id: string;
  name: string;
  description: string;
  is_reusable: boolean;
  field_schema: AvantosJsonSchema;
  ui_schema: UISchema;
  dynamic_field_config: {
    [key: string]: DynamicFieldConfig;
  };
};
