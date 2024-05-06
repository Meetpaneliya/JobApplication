// actions.js
export const FILTER_JOBS = 'FILTER_JOBS';

export const filterJobs = (filters) => ({
  type: FILTER_JOBS,
  payload: filters,
});
