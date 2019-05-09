import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../validate/validate.react";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />

      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const AddAgents = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>ID</label>
        <Field component={renderField} type="text" name="id" /> <br />
        <label>Name</label>
        <Field component={renderField} type="text" name="Name" />
        <br />
        <label>Contact</label>
        <Field component={renderField} type="text" name="Contact" />
        <br />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "addAdgentForm",
  validate
})(AddAgents);
