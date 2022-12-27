import React from "react";
import styled from "styled-components";

const StyledFilter = styled.button`
  color: var(--color-primary);
  background-color: var(--color-primary-light-2);
  border: none;
  padding: 1em;
  font-weight: 700;
  font-family: inherit;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: baseline;
  gap: 0.5em;

  &:hover {
    background-color: var(--color-primary);
    color: #fff;
  }
  &.dark {
    background-color: var(--color-primary-dark-2);
    color: #fff;
    &:hover {
      color: var(--color-primary);
      background-color: var(--color-primary-light-2);

      & path {
        fill: red;
      }
    }
  }
`;

const FilterButton = ({ children, className, ...rest }) => {
  return (
    <StyledFilter className={className} {...rest}>
      {children}
    </StyledFilter>
  );
};

export default FilterButton;
