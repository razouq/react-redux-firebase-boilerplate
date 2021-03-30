import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from '@store/actions/authActions';
import { Button, Card, CardTitle, Field, Form, Input, Label } from '@elements/auth';

export default function Signup() {
  const { auth } = useSelector((state) => state.firebase);
  const dispatch = useDispatch();

  const { handleSubmit, register } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (data) => {
    try {
      dispatch(logIn(data));
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Card>
      <CardTitle>LogIn</CardTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="email">Email :</Label>
          <br />
          <Input
            name="email"
            ref={register}
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password :</Label>
          <br />
          <Input
            name="password"
            type="password"
            id="password"
            ref={register}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit">Login</Button>
      </Form>
    </Card>
  );
}
