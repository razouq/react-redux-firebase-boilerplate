import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntity } from '../../store/actions/entityActions';

export default function CreateEntity() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEntity({ name }));
  };

  return (
    <div>
      <h1>Create Entity</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
}
