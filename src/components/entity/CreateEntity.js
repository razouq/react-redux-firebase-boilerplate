import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup.object().shape({
  name: yup.string().test({
    name: 'name',
    message: 'must have at least 2 chars',
    test: (value) => value.length >= 2,
  }),
});

export default function CreateEntity() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (data) => {
    console.log(errors);
    try {
      dispatch(createEntity(data));
      history.push('/list-entities');
    } catch (e) {
      console.error(e);
    }
  };
  console.log(errors);
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
            ref={register()}
          />

          {errors.name && <span>2 char is the minimum</span>}
          {errors.name && <span>2 char is the minimum</span>}
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
