import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createEntity } from '../../store/actions/entityActions';

export default function CreateEntity() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEntity({ name, description }));
    history.push('/list-entities');
  };

  return (
    <div>
      <H1>Create Entity</H1>
      <Form onSubmit={onSubmit}>
        <Field>
          <Label htmlFor="name">name</Label>
          <Input
            size="1"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="description">description</Label>
          <Textarea
            rows="4"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Field>
        <Button type="submit">create</Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  background-color: #f3724a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 3rem auto;
  border-radius: 1rem;
  padding: 1rem;
`;

const Field = styled.div`
  margin: 1rem;
  width: 80%;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: inline-block;
  margin: 1rem;
  font-size: 1.2rem;
  flex-basis: 20%;
  text-align: right;
`;

const Input = styled.input`
  height: 3rem;
  flex-wrap: wrap;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid black;
  margin: 1rem;
  background-color: #eee;
  outline: none;
  flex-basis: 80%;
  &:focus {
    background-color: white;
  }
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  outline: none;
  overflow: hidden;
  background-color: #f5f5f5;
  width: 10rem;
  cursor: pointer;
  border: 2px solid black;
  text-decoration: none;
  transition: all 0.3s;
  align-self: flex-end;
  margin-right: 1rem;
  margin-bottom: 1rem;
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.6rem 1.2rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
  }
`;

const Textarea = styled.textarea`
  flex-basis: 80%;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 2px #000;
  border: 1px solid transparent;
  overflow-y: visible;
  resize: none;
  outline: none;
  font-size: 1.2rem;
  padding: 1rem;
  background-color: #eee;
  &:focus {
    background-color: white;
  }
`;

const H1 = styled.h1`
  margin: 2.5rem;
`;
