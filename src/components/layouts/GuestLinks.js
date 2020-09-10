import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function GuestLinks() {
  return (
    <Links>
      <Li to="/signup">SignUp</Li>
      <Li to="/login">LogIn</Li>
    </Links>
  );
}

const Links = styled.ul`
  display: flex;
  padding: 1rem;
  list-style: none;
`;

const Li = styled(Link)`
  background-color: white;
  margin-left: 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: #aaa;
  }
`;
