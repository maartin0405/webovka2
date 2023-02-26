const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  } else if (
    /^[\w.%+-]+([.-]?[\w%+-]+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email) === false
  ) {
    return "Invalid email address";
  }
  return "";
};
export default validateEmail;
