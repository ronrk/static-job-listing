import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import JobItem from "./JobItem";

const StyledJobs = styled.section`
  max-width: 90%;
  margin-inline: auto;
  align-items: stretch;
  padding-top: clamp(8rem, 15vh, 15rem);

  & .job-item {
    border-radius: 6px;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    margin-block: 3rem 1.5rem;
    border-left: 0.5em solid var(--color-primary);
    padding-inline: clamp(1em, 4vw, 2.5rem);
    padding-block: clamp(1em, 4vh, 2.5rem);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    & .logo {
      margin-block: -4.2rem 1em;
      max-width: 60px;
    }

    & .title {
      align-items: baseline;
      margin-bottom: 0.5rem;
      flex-wrap: wrap;
      --gap: 0.5em;
      & h3 {
        margin-right: 1rem;
        font-weight: 500;
      }

      & span {
        text-transform: uppercase;
        color: #fff;
        border-radius: 50px;
        padding: 0.5em 1em 0.3em;
      }
    }

    & .additional-info {
      align-items: center;
      --gap: 1em;

      & p:not(:last-child) {
        display: flex;
        align-items: center;
        gap: 1em;
        &::after {
          position: relative;
          content: "";
          display: block;
          width: 4px;
          aspect-ratio: 1;
          background-color: var(--color-primary-dark-1);
          border-radius: 50%;
        }
      }
    }

    & hr {
      width: 100%;
      margin-block: 1em;
    }

    & .filters {
      --gap: 1rem;
      flex-wrap: wrap;
    }

    @media screen and (min-width: 800px) {
      display: grid;
      grid-template-columns: max-content minmax(max-content, 30%) 1fr;
      grid-template-rows: repeat(3, min-content);
      grid-template-areas:
        "img title filters"
        "img position filters"
        "img info filters";
      align-items: center;
      & .logo {
        grid-area: img;
        margin: 0;
        max-width: 100px;
      }
      & .title {
        grid-area: title;
        margin: 0;
        align-self: start;
      }
      & .position {
        grid-area: position;
        margin: 0;
        align-self: start;
      }
      & .additional-info {
        grid-area: info;
        margin: 0;
        align-self: start;
      }
      & .filters {
        grid-area: filters;
        margin: 0;
        justify-self: end;
      }
      & hr {
        display: none;
      }
    }
  }
`;

const JobsList = () => {
  const { filteredData } = useSelector((state) => state.jobs);
  return (
    <StyledJobs className="flex-c">
      {filteredData.map((job) => (
        <JobItem key={job.id} {...job} />
      ))}
    </StyledJobs>
  );
};

export default JobsList;
