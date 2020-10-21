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
    <Tr key={key}>
      <Td>{entities[key].name}</Td>
      <Td>{entities[key].description}</Td>
      <Td>
        <EditButton href="#">edit</EditButton>
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

const H1 = styled.h1`
  margin: 2.5rem;
`;

const Table = styled.table`
  /* border: 0.2rem solid black; */
  /* padding: 1rem; */
  border-spacing: 0;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  padding: 0.5rem;
`;

const Th = styled.th`
  padding: 0.5rem;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
`;

const EditButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  text-decoration: none;
  color: #3185fc;
  border-bottom: 0.1rem solid #3185fc;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    background-color: #3185fc;
    color: white;
  }
`;

const DeleteButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  text-decoration: none;
  color: #e4113f;
  border-bottom: 0.1rem solid #e4113f;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    background-color: #e4113f;
    color: white;
  }
`;
