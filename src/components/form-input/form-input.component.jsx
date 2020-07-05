import React from "react"
import "./form-input.styles.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      label
        ? //If label is present
        (
          <label
            className={`${
              otherProps.value.length ? "shrink" : "" //if type shrink the label
              } form-input-label`
            }
          >
            {label}
          </label>
        )
        : //If label is not present
        null
    }
  </div>
)

export default FormInput
