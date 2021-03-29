import styled from 'styled-components';

export const Form = styled.form`
  background-color: #f3724a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 3rem auto;
  border-radius: 1rem;
  padding: 1rem;
`;

export const Field = styled.div`
  margin: 1rem;
  width: 80%;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: inline-block;
  margin: 1rem;
  font-size: 1.2rem;
  flex-basis: 20%;
  text-align: right;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const Textarea = styled.textarea`
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

export const H1 = styled.h1`
  margin: 2.5rem;
`;

export const Table = styled.table`
  border-spacing: 0;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  padding: 0.5rem;
`;

export const Th = styled.th`
  padding: 0.5rem;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
`;

export const EditButton = styled.a`
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

export const DeleteButton = styled.a`
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
