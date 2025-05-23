import { type JsonSchema, type UISchemaElement } from "@jsonforms/core";

type UISchema = {
  type: "VerticalLayout" | "HorizontalLayout";
  elements: UISchemaElement[];
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

export type Form = {
  id: string;
  name: string;
  description: string;
  is_reusable: boolean;
  field_schema: JsonSchema;
  ui_schema: UISchema;
  dynamic_field_config: {
    [key: string]: DynamicFieldConfig;
  };
};
