// jobReducer.js
import { combineReducers } from 'redux';
import { FILTER_JOBS } from '../actions/filterJobs'; // Changed import path to actions.js
import dummyJobs from '../dummyJobs';

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
          (!salary || isSalaryInRange(job.salary, salary))
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

// Helper function to check if job salary is in the selected range
const isSalaryInRange = (jobSalary, selectedSalary) => {
  const [min, max] = selectedSalary.split('-');
  return jobSalary >= parseInt(min) && jobSalary <= parseInt(max);
};

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
