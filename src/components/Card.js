import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function handleApply() {
    toast.success("Apply successfully.")
}


const Card = ({ job }) => {

  return (
    <div className="max-w-sm w-96 sm:max-w-md bg-slate-800 shadow-md rounded-lg overflow-hidden mx-auto my-4">
      
      <div className='ml-5'>
        <button className=" text-sm mt-3  border border-slate-500 rounded-3xl p-2 text-gray-400"><FontAwesomeIcon className='mr-2' icon={faHourglassEnd} style={{color: "#FFD43B",}} />Posted {job.days} days ago</button>
        <button className=" text-sm mt-3 ml-28 border border-slate-500 rounded-3xl p-2 text-gray-400">{job.status}</button>
      </div>

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

          <button className="bg-slate-500 p-2 rounded-md text-sm mt-3 hover:bg-slate-600 transition duration-300" onClick={handleApply}>Apply Now</button>
        </div>

      </div>
    </div>
  );
};

export default Card;
