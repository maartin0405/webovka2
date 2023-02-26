const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  return "";
}; // make it so there has to be atleast 1 special charac ter, 1 big letter and 1 number and maybe special character
export default validatePassword;
