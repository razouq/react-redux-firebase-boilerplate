import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions/authActions";

export default function UserLinks() {
  const dispatch = useDispatch();
  return (
    <Links>
      <Li to="/profile">Profile</Li>
      <Li to="/" onClick={() => dispatch(logOut())}>
        LogOut
      </Li>
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
