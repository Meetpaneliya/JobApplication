import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';


const Card = ({ job }) => {

  return (
    <div className="max-w-sm w-96 sm:max-w-md bg-slate-800 shadow-md rounded-lg overflow-hidden mx-auto my-4">
      <button ><FontAwesomeIcon className='mr-2' icon={faHourglassEnd} style={{color: "#FFD43B",}} />Posted {job.days} days ago</button>
      <div className="flex items-center ">
        <div>
          <img src={job.image} alt='' className='rounded-full w-16 h-16 object-cover ml-3' />
        </div>
        <div className="p-4 flex-1">
          <p className="text-2xl font-semibold text-gray-400">{job.title}</p>
          <p className="text-gray-500"><span className='font-semibold text-lg'>Company :</span> {job.company}</p>
          <p className="text-gray-500"><span className='font-semibold text-lg'>Location :</span> {job.location}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500"><span className='font-semibold text-lg'>Estimated Salary :</span> {job.salary} LPA</p>
        <p className="text-gray-500"><span className='font-semibold text-lg'>Minimum Experience :</span> {job.experience}</p>
        <div className="mt-3">
          <p className="text-gray-500"><span className='font-semibold text-lg'>About us :</span> {job.description}</p>

          <button className="bg-slate-500 p-2 rounded-md text-sm mt-3">Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
