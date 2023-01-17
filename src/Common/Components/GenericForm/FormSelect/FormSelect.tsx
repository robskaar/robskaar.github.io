import React from "react";

function FormSelect(props: any) {
  return (
    <React.Fragment>
      <label property={props.property} htmlFor={props.property}>
        {props.property}
      </label>
      <select
        id={props.property + "Selector"}
        defaultValue={
          props.selectOptions.includes(props.object[props.property])
            ? props.object[props.property]
            : "Choose " + props.property
        }
        onChange={(newVal) => {
          props.object[props.property] = newVal.target.value;
        }}
        required={props.isRequired}

      >
        <option value="" selected hidden>
          Choose {props.property}
        </option>
        {props.selectOptions.map((option: any) => {
          return (
            <option selected key={option} id={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
}
export default FormSelect;
