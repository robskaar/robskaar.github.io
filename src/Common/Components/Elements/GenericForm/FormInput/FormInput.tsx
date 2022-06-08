import React from "react";

function FormInput<entityType>(props: {
  value?: any;
  selectOptions: [string, [string]];
  propertyConfig?: {
    ignored?: (keyof entityType)[];
    required?: (keyof entityType)[];
  };
  property: string;
  type: string;
  initialValues: any;
  isRequired?: boolean;
  checked?: boolean;
}) {
  return (
    <React.Fragment>
      <label property={props.property} htmlFor={props.property}>
        {props.property}
      </label>
      {props.type === "select" ? (
        <select
          id={props.property + "Selector"}
          defaultValue={
            props.selectOptions[1].includes(props.initialValues[props.property])
              ? props.initialValues[props.property]
              : "Choose " + props.property
          }
          onChange={(newVal) => {
            props.initialValues[props.property] = newVal.target.value;
          }}
          required={props.isRequired}
        >
          <option value="" selected hidden>
            Choose {props.property}
          </option>
          {props.selectOptions[1]?.map((option: any) => {
            return (
              <option selected key={option} id={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      ) : props.type === "checkbox" ? (
        <input
          required={props.isRequired}
          placeholder={"Enter " + props.property}
          type={props.type}
          id={props.property}
          name={props.property}
          defaultValue={props.value as string}
          onChange={(newVal) => {
            props.initialValues[props.property] = newVal.target.checked;
          }}
          checked={props.value}
        />
      ) : (
        <input
          required={props.isRequired}
          placeholder={"Enter " + props.property}
          type={props.type}
          id={props.property}
          name={props.property}
          defaultValue={props.value as string}
          onChange={(newVal) => {
            props.initialValues[props.property] = newVal.target.value;
          }}
        />
      )}
    </React.Fragment>
  );
}
export default FormInput;
