const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Cannot be empty";
  }
  return password !== confirmPassword ? "Passwords do not match" : "";
};

export default validateConfirmPassword;
