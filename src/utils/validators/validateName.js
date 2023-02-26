const validateName = (values) => {
  if (!values.name) {
    return "Name is required";
  }
  return values.name.length < 2 ? "Name must be at least 2 characters" : "";
};

export default validateName;
