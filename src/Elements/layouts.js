import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const Links = styled.ul`
//   display: flex;
//   padding: 1rem;
//   list-style: none;
// `;

export const Nav = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
`;

export const Brand = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: #f3724a;
  letter-spacing: 0.6rem;
  font-weight: 600;
`;

export const Links = styled.ul`
  display: flex;
  padding: 1rem;
  list-style: none;
  align-items: center;
`;

export const Li = styled(Link)`
  margin-left: 2rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  transition: all 0.3s;
  font-weight: 600;
  &:hover {
    color: #f3724a;
  }
`;

export const Action = styled(Link)`
  margin-left: 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  background: #f3724a;
  padding: 1rem;
  border-radius: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #f3724a;
    background-color: white;
    border: 2px solid #f3724a;
  }
`;
