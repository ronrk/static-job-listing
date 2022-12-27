import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const filteredData = data.map((item) => {
  return {
    ...item,
    filters: [...item.languages, item.role, item.level, ...item.tools],
  };
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    data: filteredData,
    filteredData,
    filters: [],
  },
  reducers: {
    clearFilters(state, action) {
      state.filters = [];
      state.filteredData = filteredData;
    },
    removeFilter(state, action) {
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload
      );
      if (state.filters.length === 0) {
        state.filteredData = filteredData;
        return;
      }

      state.filteredData = state.data.filter((job) => {
        console.log({ jobFilters: job, filters: state.filters });
        return job.filters.includes(...state.filters);
      });
    },
    addFilter(state, action) {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      } else {
        state.filters = state.filters.filter(
          (filter) => filter !== action.payload
        );
      }
      state.filteredData = state.data.filter((job) => {
        console.log({ jobFilters: job, filters: state.filters });
        return state.filters.every((f) => job.filters.includes(f));
      });
    },
  },
});

export const jobsReducer = jobsSlice.reducer;
export const { addFilter, removeFilter, clearFilters } = jobsSlice.actions;
