import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUp } from '@store/actions/authActions';
import { Button, Card, CardTitle, Field, Form, Input, Label } from '@elements/auth';

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state.firebase);

  const { register, handleSubmit } = useForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (data) => {
    try {
      dispatch(signUp(data));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Card>
      <CardTitle>SignUp</CardTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="eFirstNamemail">FirstName :</Label>
          <br />
          <Input
            type="text"
            id="FirstName"
            name="firstName"
            ref={register}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="LastName">LastName :</Label>
          <br />
          <Input
            type="text"
            id="LastName"
            name="lastName"
            ref={register}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email :</Label>
          <br />
          <Input
            type="text"
            name="email"
            id="email"
            ref={register}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password :</Label>
          <br />
          <Input
            type="password"
            id="password"
            name="password"
            ref={register}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Field>
        <Button type="submit">SignUp</Button>
      </Form>
    </Card>
  );
}
