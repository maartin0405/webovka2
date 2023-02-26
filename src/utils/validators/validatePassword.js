const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }
  return password.length < 8 ? "Password must be at least 8 characters" : "";
}; // make it so there has to be atleast 1 special charac ter, 1 big letter and 1 number and maybe special character
export default validatePassword;
