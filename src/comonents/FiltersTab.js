import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import { ReactComponent as RemoveIcon } from "../images/icon-remove.svg";
import { removeFilter, clearFilters } from "../store";

const StyledFiltersTab = styled.div`
  position: relative;
  z-index: 100;
  top: 90px;
  width: 90%;
  left: 5%;
  padding: 0.5em 2em;
  border-radius: 6px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  align-items: center;

  & .filters {
    flex-wrap: wrap;
  }

  & .btn-clear {
    border-bottom: 4px solid transparent;
    border-radius: 8px;
    padding-bottom: 0.1em;
    padding-inline: 0.2em;
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--color-primary);
    }
  }
`;

const FiltersTab = () => {
  const { filters } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };
  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  return (
    <StyledFiltersTab className="flex bg-white">
      <div className="filters flex">
        {filters.map((item) => (
          <FilterButton
            onClick={() => handleRemoveFilter(item)}
            className="dark fs-200"
            key={item}
          >
            {item}
            <RemoveIcon />
          </FilterButton>
        ))}
      </div>
      <button
        className="btn btn-clear fs-200 text-primary"
        onClick={handleClearFilters}
      >
        Clear
      </button>
    </StyledFiltersTab>
  );
};

export default FiltersTab;
