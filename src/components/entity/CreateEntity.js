import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createEntity } from '@store/actions/entityActions';
import {
  Button,
  Field,
  Form,
  H1,
  Input,
  Label,
  Textarea,
} from '../../elements/entity';

export default function CreateEntity() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (data) => {
    try {
      dispatch(createEntity(data));
      history.push('/list-entities');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <H1>Create Entity</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="name">name</Label>
          <Input
            name="name"
            size="1"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={register}
          />
        </Field>
        <Field>
          <Label htmlFor="description">description</Label>
          <Textarea
            rows="4"
            id="description"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            ref={register}
          />
        </Field>
        <Button type="submit">create</Button>
      </Form>
    </div>
  );
}
