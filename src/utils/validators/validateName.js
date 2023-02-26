const validateName = (name) => {
  if (!name) {
    return "Name is required";
  } else if (name.length < 2) {
    return "Name must be atleast 2 characters";
  }
  return "";
};

export default validateName;
