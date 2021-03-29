import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 1rem;
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const CardTitle = styled.div`
  border-bottom: 2px solid black;
  padding: 1rem;
  font-size: 1.4rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled.div`
  margin: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  margin: 1rem 0;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0;
  border: 2px solid black;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  width: 10rem;
  background-color: #bbb;
  &:hover {
    background-color: black;
    color: white;
  }
`;
