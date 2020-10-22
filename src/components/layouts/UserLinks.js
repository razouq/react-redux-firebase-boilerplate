import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

export default function UserLinks() {
  const dispatch = useDispatch();
  return (
    <Links>
      <Action to="/create-entity">Create Entity</Action>
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
  align-items: center;
`;

const Li = styled(Link)`
  margin-left: 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  transition: all 0.3s;
  font-weight: 600;
  &:hover {
    color: #f3724a;
  }
`;

const Action = styled(Link)`
  margin-left: 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  background: #f3724a;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f3724a;
    background-color: white;
    border: 2px solid #f3724a;
  }
`;
