const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "Cannot be empty";
  } else if (password !== confirmPassword) {
    return "Password do not match";
  }
  return "";
};

export default validateConfirmPassword;
