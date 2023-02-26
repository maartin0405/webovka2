const validateEmail = (props) => {
  if (!props.registerValues.email) {
    return "Email is required";
  } else if (
    /^[\w.%+-]+([.-]?[\w%+-]+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(
      props.registerValues.email
    ) === false
  ) {
    return "Invalid email address";
  }
  return "";
};
export default validateEmail;
