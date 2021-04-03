import React from 'react';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { DeleteButton, EditButton, H1, Table, Td, Th, Tr } from '@elements/entity';

const ListEntities = () => {
  useFirestoreConnect([{ collection: 'entities' }]);
  const entities = useSelector((state) => state.firestore.data.entities);
  if (isEmpty('entities')) {
    return <p>empty</p>;
  } else if (!isLoaded('entities') || !entities) {
    return <p>Loading...</p>;
  }
  const entitiesList = Object.keys(entities).map((key) => (
    <Tr key={key}>
      <Td>{entities[key].name}</Td>
      <Td>{entities[key].description}</Td>
      <Td>
        <EditButton to={`/edit-entity/${key}`}>edit</EditButton>
        <DeleteButton href="#">delete</DeleteButton>
      </Td>
    </Tr>
  ));
  return (
    <>
      <H1>List Of My Entities</H1>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>{entitiesList}</tbody>
      </Table>
    </>
  );
};

export default ListEntities;
