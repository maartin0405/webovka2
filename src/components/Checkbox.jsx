import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label, id }) => {
  return (
    <div>
      <input type="checkbox" id={id}></input>
      <label for={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
