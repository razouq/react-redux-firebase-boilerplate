import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Navbar() {
  const auth = useSelector(state => state.auth);
  return (
    <Nav>
      <Brand to="/">brand</Brand>
      <Links>
        <Li to="/singup">SignUp</Li>
        <Li to="/login">LogIn</Li>
        <Li to="/profile">Profile</Li>
        <Li to="/LogOut">LogOut</Li>
      </Links>
    </Nav>
  )
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


