import { combineReducers } from 'redux';
import { FILTER_JOBS } from '../actions/filterJobs';
import dummyJobs from '../dummyJobs';

const initialJobsState = {
  jobs: dummyJobs,
};

const jobsReducer = (state = initialJobsState, action) => {
  switch (action.type) {
    case FILTER_JOBS:
      const { role, experience, location, salary, company } = action.payload;

      let filteredJobs = dummyJobs.filter((job) => {
        return (
          (!role || job.role.toLowerCase() === role.toLowerCase()) &&
          (!experience || isExperienceInRange(job.experience, experience)) &&
          (!location || job.status.toLowerCase() === location.toLowerCase()) &&
          (!salary || isSalaryInRange(job.salary, salary)) &&
          (!company || job.company.toLowerCase().includes(company.toLowerCase())) // Filter by company name
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

const isExperienceInRange = (jobExperience, selectedExperience) => {
  switch (selectedExperience) {
    case '2-3yr':
      return jobExperience.includes('2') || jobExperience.includes('3');
    case '3+yr':
      return jobExperience.includes('3+') || jobExperience.includes('4+') || jobExperience.includes('5+');
    case '4+yr':
      return jobExperience.includes('4+') || jobExperience.includes('5+') || jobExperience.includes('6+');
    default:
      return true; 
  }
};


const isSalaryInRange = (jobSalary, selectedSalary) => {
  const [min, max] = selectedSalary.split('-');
  return jobSalary >= parseInt(min) && jobSalary <= parseInt(max);
};

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
