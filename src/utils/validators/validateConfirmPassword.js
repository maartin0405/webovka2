const validateConfirmPassword = (props) => {
  if (!props.confirmPassword) {
    return "Cannot be empty";
  }
  return props.registerValues.password !== props.confirmPassword
    ? "Passwords do not match"
    : "";
};

export default validateConfirmPassword;
