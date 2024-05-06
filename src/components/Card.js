import React, { useState } from 'react';

const Card = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateDescription = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionToShow = isExpanded ? job.description : truncateDescription(job.description, 6);

  return (
    <div className="max-w-sm w-full sm:max-w-md bg-slate-800 shadow-md rounded-lg overflow-hidden mx-auto my-4">
      <div className="flex items-center border-b border-gray-500">
        <div>
          <img src={job.image} alt='' className='rounded-full w-16 h-16 object-cover ml-3'/>
        </div>
        <div className="p-4 flex-1">
          <p className="text-lg font-semibold text-gray-400">{job.title}</p>
          <p className="text-gray-500">Company: {job.company}</p>
          <p className="text-gray-500">Location: {job.location}</p>
          <p className="text-gray-500">Salary: {job.salary} LPA</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500">Description: {descriptionToShow}</p>
        {!isExpanded && (
          <p className="text-gray-500 cursor-pointer" onClick={toggleExpand}>
            <u>Show More</u>
          </p>
        )}
        {isExpanded && (
          <>
            <p className="text-gray-500">Experience: {job.experience}</p>
            <div className="mt-3">
              <button className="bg-slate-500 p-2 rounded-md text-sm">Apply Now</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
