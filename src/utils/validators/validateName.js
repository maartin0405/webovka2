const validateName = (name) => {
  if (!name) {
    return "Name is required";
  }
  return name.length < 2 ? "Name must be at least 2 characters" : "";
};

export default validateName;
