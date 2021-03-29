import React from 'react';
import { Li, Links } from '../../Elements/layouts';

export default function GuestLinks() {
  return (
    <Links>
      <Li to="/signup">SignUp</Li>
      <Li to="/login">LogIn</Li>
    </Links>
  );
}
