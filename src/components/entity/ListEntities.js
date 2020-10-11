import React from 'react';
import styled from 'styled-components';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const ListEntities = () => {
  useFirestoreConnect([{ collection: 'entities' }]);
  const entities = useSelector((state) => state.firestore.data.entities);
  if (isEmpty('entities')) {
    return <p>empty</p>;
  } else if (!isLoaded('entities') || !entities) {
    return <p>Loading...</p>;
  }
  const entitiesList = Object.keys(entities).map((key) => (
    <p key={key}>{entities[key].name}</p>
  ));
  return (
    <>
      <H1>List Of My Entities</H1>
      {entitiesList}
    </>
  );
};

export default ListEntities;

const H1 = styled.h1`
  margin: 2.5rem;
`;
