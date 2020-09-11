import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

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

const Card = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
`;

const CardTitle = styled.div`
  border-bottom: 2px solid black;
  padding: 1rem;
  font-size: 1.4rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.div`
  margin: 1rem;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  border: 2px solid black;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  width: 10rem;
  background-color: #bbb;
  &:hover {
    background-color: black;
    color: white;
  }
`;
