import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
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
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector((state) => state.firebase);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signUp({ email, password, firstName, lastName }));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Card>
      <CardTitle>SignUp</CardTitle>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Field>
          <Label htmlFor="eFirstNamemail">FirstName :</Label>
          <br />
          <Input
            type="text"
            id="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="LastName">LastName :</Label>
          <br />
          <Input
            type="text"
            id="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Field>
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
        <Button type="submit">SignUp</Button>
      </Form>
    </Card>
  );
}
