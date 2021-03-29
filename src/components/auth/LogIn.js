import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import {
  Button,
  Card,
  CardTitle,
  Field,
  Form,
  Input,
  Label,
} from '../../Elements/auth';

export default function Signup() {
  const { auth } = useSelector((state) => state.firebase);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(logIn({ email, password }));
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Card>
      <CardTitle>LogIn</CardTitle>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Field>
          <Label htmlFor="email">Email :</Label>
          <br />
          <Input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field>
          <Label htmlFor="password">Password :</Label>
          <br />
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
}
