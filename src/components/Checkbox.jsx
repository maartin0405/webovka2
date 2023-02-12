import React from "react";
import styled from "@emotion/styled";

const Checkbox = ({ label }) => {
  return (
    <div>
      <input type="checkbox" id="hi"></input>
      <label for="hi">{label}</label>
    </div>
  );
};

export default Checkbox;
