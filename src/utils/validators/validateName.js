const validateName = () => {
  if (!registerValues.name) {
    return "Name is required";
  }
  return registerValues.name.length < 2
    ? "Name must be at least 2 characters"
    : "";
};

export default validateName;
