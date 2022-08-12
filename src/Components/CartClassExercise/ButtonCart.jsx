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
    bgColor: 'green',
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
  background-color: ${({ type }) => variant[type].bgColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ type }) => variant[type].color};
  font-weight: 600;
  display: flex;
  gap: 0.5rem;

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
