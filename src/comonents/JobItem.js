import React from "react";

import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../store";

const JobItem = ({
  company,
  contract,
  featured,
  location,
  logo,
  new: isNew,
  position,
  postedAt,
  filters: jobFilters,
}) => {
  const { filters } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const handleClick = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <article className="job-item bg-white">
      <img src={logo} alt="" className="logo" />
      <div className="title flex">
        <h3 className="text-primary fs-300">{company}</h3>
        {isNew && <span className="bg-primary fs-200">new!</span>}
        {featured && <span className="bg-dark-2 fs-200">featured</span>}
      </div>
      <p className="position text-dark-2 fs-100 fw-b">{position}</p>
      <div className="additional-info flex text-dark-1">
        <p className="fs-100 fw-l">{postedAt}</p>
        <p className="fs-100 fw-l">{contract}</p>
        <p className="fs-100 fw-l">{location}</p>
      </div>
      <hr />
      <div className="filters flex">
        {jobFilters.map((filter, idx) => (
          <FilterButton
            className={filters.includes(filter) ? "dark fs-200" : "fs-200"}
            key={idx}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </div>
    </article>
  );
};

export default JobItem;
