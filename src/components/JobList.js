import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const JobList = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  

  return (
    <div className="grid grid-cols-3 gap-4">
      {jobs.map((job) => (
        <Card key={job.id} job={job} className="max-w-xs w-96 sm:max-w-md bg-slate-800 shadow-md rounded-lg overflow-hidden mx-auto my-4"/>
      ))}
      {jobs.length === 0 && <h2 className='text-center font-bold text-3xl mt-52'>Job Not Found</h2>}
    </div>
  );
};

export default JobList;
