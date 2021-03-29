import React from 'react';
import { useSelector } from 'react-redux';
import UserLinks from './UserLinks';
import GuestLinks from './GuestLinks';
import { Brand, Nav } from '../../Elements/layouts';

export default function Navbar() {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <Nav>
      <Brand to="/">Brand</Brand>
      {auth.uid ? <UserLinks /> : <GuestLinks />}
    </Nav>
  );
}
