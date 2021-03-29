import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import { Action, Li, Links } from '../../Elements/layouts';

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
