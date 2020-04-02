import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Done() {
  return (
    <div>
      <h1>Demo Complete</h1>
      <Link to="/">Click here to restart</Link>
    </div>
  );
}

export default Done;
