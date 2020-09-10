import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserLinks from "./UserLinks";
import GuestLinks from "./GuestLinks";

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  return (
    <Nav>
      <Brand to="/">brand</Brand>
      {auth.uid ? <UserLinks /> : <GuestLinks />}
    </Nav>
  );
}

const Nav = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
`;

const Brand = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
