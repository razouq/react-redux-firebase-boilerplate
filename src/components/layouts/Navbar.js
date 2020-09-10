import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'
import UserLinks from './UserLinks';
import GuestLinks from './GuestLinks';


export default function Navbar() {
  const auth = useSelector(state => state.auth);
  console.log(auth);
  return (
    <Nav>
      <Brand to="/">brand</Brand>
      {auth.uid?<UserLinks/>:<GuestLinks/>}
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


