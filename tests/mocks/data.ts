export const data = {
  "$schema": "http://localhost:9000/schemas/ActionBlueprintGraphDescription.json",
  "id": "bp_01jk766tckfwx84xjcxazggzyc",
  "tenant_id": "1",
  "name": "Onboard Customer 0",
  "description": "Automated test action",
  "category": "Category 4",
  "nodes": [
    {
      "id": "form-bad163fd-09bd-4710-ad80-245f31b797d5",
      "type": "form",
      "position": {
        "x": 1437,
        "y": 264
      },
      "data": {
        "id": "bp_c_01jka1e3jwewhb2177h7901c5j",
        "component_key": "form-bad163fd-09bd-4710-ad80-245f31b797d5",
        "component_type": "form",
        "component_id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
        "name": "Form F",
        "prerequisites": [
          "form-0f58384c-4966-4ce6-9ec2-40b96d61f745",
          "form-e15d42df-c7c0-4819-9391-53730e6d47b3"
        ],
        "permitted_roles": [],
        "input_mapping": {
          "email": {
            "node_id": "form-e15d42df-c7c0-4819-9391-53730e6d47b3",
            "property_name": "email"
          }
        },
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    },
    {
      "id": "form-0f58384c-4966-4ce6-9ec2-40b96d61f745",
      "type": "form",
      "position": {
        "x": 1093.4015147514929,
        "y": 155.2205909169969
      },
      "data": {
        "id": "bp_c_01jka1e3jzewhb9eqfq08rk90b",
        "component_key": "form-0f58384c-4966-4ce6-9ec2-40b96d61f745",
        "component_type": "form",
        "component_id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
        "name": "Form D",
        "prerequisites": [
          "form-a4750667-d774-40fb-9b0a-44f8539ff6c4"
        ],
        "permitted_roles": [],
        "input_mapping": {},
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    },
    {
      "id": "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88",
      "type": "form",
      "position": {
        "x": 494,
        "y": 269
      },
      "data": {
        "id": "bp_c_01jka1e3k0ewha8jbgeayz4cwp",
        "component_key": "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88",
        "component_type": "form",
        "component_id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
        "name": "Form A",
        "prerequisites": [],
        "permitted_roles": [],
        "input_mapping": {},
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    },
    {
      "id": "form-7c26f280-7bff-40e3-b9a5-0533136f52c3",
      "type": "form",
      "position": {
        "x": 779.0096360025458,
        "y": 362.36545334182
      },
      "data": {
        "id": "bp_c_01jka1e3k1ewhbfr03fcxg8qze",
        "component_key": "form-7c26f280-7bff-40e3-b9a5-0533136f52c3",
        "component_type": "form",
        "component_id": "f_01jk7aygnqewh8gt8549beb1yc",
        "name": "Form C",
        "prerequisites": [
          "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88"
        ],
        "permitted_roles": [],
        "input_mapping": {},
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    },
    {
      "id": "form-a4750667-d774-40fb-9b0a-44f8539ff6c4",
      "type": "form",
      "position": {
        "x": 780.692362673456,
        "y": 154.98072799490808
      },
      "data": {
        "id": "bp_c_01jka1e3k2ewha2z3p674dbyrx",
        "component_key": "form-a4750667-d774-40fb-9b0a-44f8539ff6c4",
        "component_type": "form",
        "component_id": "f_01jk7awbhqewgbkbgk8rjm7bv7",
        "name": "Form B",
        "prerequisites": [
          "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88"
        ],
        "permitted_roles": [],
        "input_mapping": {},
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    },
    {
      "id": "form-e15d42df-c7c0-4819-9391-53730e6d47b3",
      "type": "form",
      "position": {
        "x": 1099.7646441474558,
        "y": 361.86975131228957
      },
      "data": {
        "id": "bp_c_01jka1e3k3ewhbpfxt533q5hcw",
        "component_key": "form-e15d42df-c7c0-4819-9391-53730e6d47b3",
        "component_type": "form",
        "component_id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
        "name": "Form E",
        "prerequisites": [
          "form-7c26f280-7bff-40e3-b9a5-0533136f52c3"
        ],
        "permitted_roles": [],
        "input_mapping": {},
        "sla_duration": {
          "number": 0,
          "unit": "minutes"
        },
        "approval_required": false,
        "approval_roles": []
      }
    }
  ],
  "edges": [
    {
      "source": "form-0f58384c-4966-4ce6-9ec2-40b96d61f745",
      "target": "form-bad163fd-09bd-4710-ad80-245f31b797d5"
    },
    {
      "source": "form-e15d42df-c7c0-4819-9391-53730e6d47b3",
      "target": "form-bad163fd-09bd-4710-ad80-245f31b797d5"
    },
    {
      "source": "form-a4750667-d774-40fb-9b0a-44f8539ff6c4",
      "target": "form-0f58384c-4966-4ce6-9ec2-40b96d61f745"
    },
    {
      "source": "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88",
      "target": "form-7c26f280-7bff-40e3-b9a5-0533136f52c3"
    },
    {
      "source": "form-47c61d17-62b0-4c42-8ca2-0eff641c9d88",
      "target": "form-a4750667-d774-40fb-9b0a-44f8539ff6c4"
    },
    {
      "source": "form-7c26f280-7bff-40e3-b9a5-0533136f52c3",
      "target": "form-e15d42df-c7c0-4819-9391-53730e6d47b3"
    }
  ],
  "forms": [
    {
      "id": "f_01jk7ap2r3ewf9gx6a9r09gzjv",
      "name": "test form",
      "description": "test",
      "is_reusable": false,
      "field_schema": {
        "type": "object",
        "properties": {
          "button": {
            "avantos_type": "button",
            "title": "Button",
            "type": "object"
          },
          "dynamic_checkbox_group": {
            "avantos_type": "checkbox-group",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "dynamic_object": {
            "avantos_type": "object-enum",
            "enum": ["random"],
            "title": "Dynamic Object",
            "type": "object"
          },
          "email": {
            "avantos_type": "short-text",
            "format": "email",
            "title": "Email",
            "type": "string"
          },
          "id": {
            "avantos_type": "short-text",
            "title": "ID",
            "type": "string"
          },
          "multi_select": {
            "avantos_type": "multi-select",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "name": {
            "avantos_type": "short-text",
            "title": "Name",
            "type": "string"
          },
          "notes": {
            "avantos_type": "multi-line-text",
            "title": "Notes",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name",
          "email"
        ]
      },
      "ui_schema": {
        "type": "VerticalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/dynamic_checkbox_group",
            "label": "Dynamic Checkbox Group"
          },
          {
            "type": "Button",
            "scope": "#/properties/button",
            "label": "Button"
          },
          {
            "type": "Control",
            "scope": "#/properties/dynamic_object",
            "label": "Dynamic Object"
          },
          {
            "type": "Control",
            "scope": "#/properties/id",
            "label": "ID"
          },
          {
            "type": "Control",
            "scope": "#/properties/name",
            "label": "Name"
          },
          {
            "type": "Control",
            "scope": "#/properties/email",
            "label": "Email"
          },
          {
            "type": "Control",
            "scope": "#/properties/notes",
            "label": "Notes"
          },
          {
            "type": "Control",
            "scope": "#/properties/multi_select",
            "label": "Multi Select",
            "options": {
              "format": "multi-select"
            }
          }
        ]
      },
      "dynamic_field_config": {
        "button": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
        },
        "dynamic_checkbox_group": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
        },
        "dynamic_object": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7ap2r0ewfbrfd53sx46hd2"
        }
      }
    },
    {
      "id": "f_01jk7awbhqewgbkbgk8rjm7bv7",
      "name": "test form",
      "description": "test",
      "is_reusable": false,
      "field_schema": {
        "type": "object",
        "properties": {
          "button": {
            "avantos_type": "button",
            "title": "Button",
            "type": "object"
          },
          "dynamic_checkbox_group": {
            "avantos_type": "checkbox-group",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "dynamic_object": {
            "avantos_type": "object-enum",
            "enum": ["random2"],
            "title": "Dynamic Object",
            "type": "object"
          },
          "email": {
            "avantos_type": "short-text",
            "format": "email",
            "title": "Email",
            "type": "string"
          },
          "id": {
            "avantos_type": "short-text",
            "title": "ID",
            "type": "string"
          },
          "multi_select": {
            "avantos_type": "multi-select",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "name": {
            "avantos_type": "short-text",
            "title": "Name",
            "type": "string"
          },
          "notes": {
            "avantos_type": "multi-line-text",
            "title": "Notes",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name",
          "email"
        ]
      },
      "ui_schema": {
        "type": "VerticalLayout",
        "elements": [
          {
            "type": "Control",
            "scope": "#/properties/multi_select",
            "label": "Multi Select",
            "options": {
              "format": "multi-select"
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/dynamic_checkbox_group",
            "label": "Dynamic Checkbox Group"
          },
          {
            "type": "Button",
            "scope": "#/properties/button",
            "label": "Button"
          },
          {
            "type": "Control",
            "scope": "#/properties/dynamic_object",
            "label": "Dynamic Object"
          },
          {
            "type": "Control",
            "scope": "#/properties/id",
            "label": "ID"
          },
          {
            "type": "Control",
            "scope": "#/properties/name",
            "label": "Name"
          },
          {
            "type": "Control",
            "scope": "#/properties/email",
            "label": "Email"
          },
          {
            "type": "Control",
            "scope": "#/properties/notes",
            "label": "Notes"
          }
        ]
      },
      "dynamic_field_config": {
        "button": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7awbhmewgbmj7rd1cmra9c"
        },
        "dynamic_checkbox_group": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7awbhmewgbmj7rd1cmra9c"
        },
        "dynamic_object": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7awbhmewgbmj7rd1cmra9c"
        }
      }
    },
    {
      "id": "f_01jk7aygnqewh8gt8549beb1yc",
      "name": "test form",
      "description": "test",
      "is_reusable": false,
      "field_schema": {
        "type": "object",
        "properties": {
          "button": {
            "avantos_type": "button",
            "title": "Button",
            "type": "object"
          },
          "dynamic_checkbox_group": {
            "avantos_type": "checkbox-group",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "dynamic_object": {
            "avantos_type": "object-enum",
            "enum": [
              {
                "title": "Foo"
              }
            ],
            "title": "Dynamic Object",
            "type": "object"
          },
          "email": {
            "avantos_type": "short-text",
            "format": "email",
            "title": "Email",
            "type": "string"
          },
          "id": {
            "avantos_type": "short-text",
            "title": "ID",
            "type": "string"
          },
          "multi_select": {
            "avantos_type": "multi-select",
            "items": {
              "enum": [
                "foo",
                "bar",
                "foobar"
              ],
              "type": "string"
            },
            "type": "array",
            "uniqueItems": true
          },
          "name": {
            "avantos_type": "short-text",
            "title": "Name",
            "type": "string"
          },
          "notes": {
            "avantos_type": "multi-line-text",
            "title": "Notes",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name",
          "email"
        ]
      },
      "ui_schema": {
        "type": "VerticalLayout",
        "elements": [
          {
            "type": "Button",
            "scope": "#/properties/button",
            "label": "Button"
          },
          {
            "type": "Control",
            "scope": "#/properties/dynamic_object",
            "label": "Dynamic Object"
          },
          {
            "type": "Control",
            "scope": "#/properties/id",
            "label": "ID"
          },
          {
            "type": "Control",
            "scope": "#/properties/name",
            "label": "Name"
          },
          {
            "type": "Control",
            "scope": "#/properties/email",
            "label": "Email"
          },
          {
            "type": "Control",
            "scope": "#/properties/notes",
            "label": "Notes"
          },
          {
            "type": "Control",
            "scope": "#/properties/multi_select",
            "label": "Multi Select",
            "options": {
              "format": "multi-select"
            }
          },
          {
            "type": "Control",
            "scope": "#/properties/dynamic_checkbox_group",
            "label": "Dynamic Checkbox Group"
          }
        ]
      },
      "dynamic_field_config": {
        "button": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7aygnkewhbk7th8nbnff4f"
        },
        "dynamic_checkbox_group": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7aygnkewhbk7th8nbnff4f"
        },
        "dynamic_object": {
          "selector_field": "title",
          "payload_fields": {
            "userId": {
              "type": "form_field",
              "value": "id"
            }
          },
          "endpoint_id": "te_01jk7aygnkewhbk7th8nbnff4f"
        }
      }
    }
  ],
  "branches": [],
  "triggers": []
}