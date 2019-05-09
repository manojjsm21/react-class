import React from "react";

const validate = values => {
  const errors = {};

  if (!values.Name) {
    errors.Name = "Required";
  } else if (values.Name.length < 2) {
    errors.Name = "Minimum be 2 characters or more";
  }

  return errors;
};

export default validate;
