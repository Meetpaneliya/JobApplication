
import { combineReducers } from 'redux';
import { FILTER_JOBS } from '../actions/filterJobs';
import dummyJobs from '../dummyJobs'; // Import the provided dummy data

const initialJobsState = {
  jobs: dummyJobs,
};

const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case FILTER_JOBS:
      const { role, experience, location, salary } = action.payload;
      // Filter jobs based on selected filters
      let filteredJobs = dummyJobs.filter((job) => {
        return (
          (!role || job.role.toLowerCase() === role.toLowerCase()) &&
          (!experience || job.experience.toLowerCase().includes(experience.toLowerCase())) &&
          (!location || job.status.toLowerCase() === location.toLowerCase()) &&
          (!salary || job.salary === salary)
        );
      });
      return {
        ...state,
        jobs: filteredJobs,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
