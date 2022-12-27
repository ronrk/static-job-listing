import React from "react";
import { useSelector } from "react-redux";
import FiltersTab from "./comonents/FiltersTab";
import JobsList from "./comonents/JobsList";

const App = () => {
  const { filters } = useSelector((state) => state.jobs);
  return (
    <div className="app bg-light-1">
      <div className="bg"></div>
      {filters.length > 0 && <FiltersTab />}

      <JobsList />
    </div>
  );
};

export default App;
