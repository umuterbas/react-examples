import React from 'react';
import styled from 'styled-components';
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
} from 'react-icons/md';

import PropTypes from 'prop-types';

const variant = {
  add: {
    icon: <MdOutlineAddShoppingCart />,
    bgColor: 'hsl(158, 36%, 27%)',
    color: 'white',
  },
  remove: {
    icon: <MdOutlineRemoveShoppingCart />,
    bgColor: 'red',
    color: 'white',
  },
  default: {
    bgColor: 'lightgray',
    color: 'white',
  },
};

const StyledButton = styled.button`
  font-family: Montserrat;
  background-color: ${({ type }) => variant[type].bgColor};
  color: ${({ type }) => variant[type].color};
  border: none;
  border-radius: 8px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weigth: 700;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  height: fit-content;
  &:hover {
    background-color: ${({ type }) => variant[type].color};
    color: ${({ type }) => variant[type].bgColor};
    border: 1px solid ${({ type }) => variant[type].bgColor};
  }
`;

export default function ButtonCart(props) {
  const { label, onClick, type } = props;
  return (
    <StyledButton onClick={onClick} type={type}>
      {variant[type].icon}
      {label}
    </StyledButton>
  );
}

ButtonCart.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

ButtonCart.defaultProps = {
  type: 'default',
};
