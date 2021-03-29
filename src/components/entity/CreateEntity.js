import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createEntity } from '../../store/actions/entityActions';
import {
  Button,
  Field,
  Form,
  H1,
  Input,
  Label,
  Textarea,
} from '../../Elements/entity';

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
