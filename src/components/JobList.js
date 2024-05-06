// JobList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  

  return (
    <div>
      {jobs.map((job) => (
        <Card key={job.id} job={job}/>
      ))}
      {jobs.length === 0 && <h2 className='text-center font-bold text-3xl mt-52'>Job Not Found</h2>}
    </div>
  );
};

export default JobList;
