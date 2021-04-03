import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fetchEntity } from '@store/actions/entityActions';
import { Button, Field, Form, H1, Input, Label, Textarea } from '@elements/entity';


const schema = yup.object().shape({
  name: yup.string().test({
    name: 'name',
    message: 'name must have at least 2 chars',
    test: (value) => value.length >= 2,
  }),
  description: yup.string().test({
    name: 'description',
    message: 'description must have at least 2 chars',
    test: (value) => value.length >= 2,
  }),
});

const EditEntity = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const { entityId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log(entityId);
    dispatch(fetchEntity(entityId));
  });

  const onSubmit = (data) => {
    console.log(errors);
    try {
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
        </Field>
        {errors.name && <span>{errors.name.message}</span>}
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
        {errors.description && <span>{errors.description.message}</span>}
        <Button type="submit">create</Button>
      </Form>
    </div>
  );
};

export default EditEntity;
