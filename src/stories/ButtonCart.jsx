import React from 'react';
import styled from 'styled-components';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  display: flex;
  gap: 0.5rem;

  &:hover {
    background-color: white;
    color: green;
    border: 1px solid green;
  }
`;

export default function ButtonCart(props) {
  const { label, onClick, bgColor } = props;
  console.log('bgColor', bgColor);
  return (
    <StyledButton onClick={onClick} bgColor={bgColor}>
      <MdOutlineAddShoppingCart />
      {label}
    </StyledButton>
  );
}
