import React from "react";
import FormInput from "../FormInput/FormInput";

function FormObjectHandler<entityType>(props: {
  initialValues: entityType;
  selectOptions: [string, [string]];
  propertyConfig?: {
    ignored?: (keyof entityType)[];
    required?: (keyof entityType)[];
  };
  section?: {
    title: string;
    containedProperties?: [string];
    isOpen: boolean;
  };
  sections?: {
    title: string;
    containedProperties?: [string];
    isOpen: boolean;
  }[];
}) {
  return (
    <React.Fragment>
      {Object.entries(props.initialValues).map(
        ([property, value]: [any, any]) => {
          let type: string = "";
          let isRequired = props.propertyConfig?.required?.includes(property);

          if (
            (props.section &&
              !props.section.containedProperties?.includes(property)) ||
            props.propertyConfig?.ignored?.includes(property) ||
            (props.sections &&
              props.sections.find((el) =>
                el.containedProperties?.includes(property)
              ))
          ) {
            return null; // if collapsiblesections declared and this is invoked by the formcollapsible component that and id isnt in the list, dont render it
          }

          if (props.selectOptions && property === props.selectOptions[0]) {
            return (
              <FormInput
                key={property}
                isRequired={isRequired}
                type={"select"}
                property={property}
                selectOptions={props.selectOptions}
                initialValues={props.initialValues}
              />
            );
          } else if (typeof value === "string") {
            type = "text";
          } else if (typeof value === "number") {
            type = "number";
          } else if (typeof value === "boolean") {
            type = "checkbox";
            return (
              <FormInput
                key={property}
                isRequired={isRequired}
                type={type}
                property={property}
                initialValues={props.initialValues}
                value={value}
                selectOptions={props.selectOptions}
                propertyConfig={props.propertyConfig}
                checked={value}
              />
            );
          } else if (value instanceof Date) {
            type = "date";
          } else if (typeof value === "object") {
            type = "hidden";
            return (
              <FormObjectHandler
                section={props.section}
                propertyConfig={props.propertyConfig}
                initialValues={value}
                selectOptions={props.selectOptions}
              />
            );
          }
          return (
            <FormInput
              key={property}
              isRequired={isRequired}
              type={type}
              property={property}
              initialValues={props.initialValues}
              value={value}
              selectOptions={props.selectOptions}
              propertyConfig={props.propertyConfig}
            />
          );
        }
      )}
    </React.Fragment>
  );
}
export default FormObjectHandler;
