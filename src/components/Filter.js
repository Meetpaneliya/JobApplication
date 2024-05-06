import React , {useState}from 'react';
import { useDispatch } from 'react-redux';
import { filterJobs } from '../actions/filterJobs';

const Filter = () => {
  const dispatch = useDispatch();
  const [company, setCompany] = useState('');

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(filterJobs({ [name]: value }));
  };

  const handleCompanySearch = (event) => {
    const { value } = event.target;
    setCompany(value);
    dispatch(filterJobs({ company: value }));
  };
   
  return (
    <div className="w-11/12 max-w-max mx-auto py-4 justify-center flex space-x-4 gap-y-4">
      <div className="w-full">
        <select id="role" name="role" className="border border-gray-300 rounded p-2 mb-4 w-full" onChange={handleFilterChange}>
          <option value="" disabled selected hidden>Role</option>
          <option value="development">Development</option>
          <option value="finance">Finance</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      <div className="w-full">
        <select id="experience" name="experience" className="border border-gray-300 rounded p-2 mb-4 w-full" onChange={handleFilterChange}>
          <option value="" disabled selected hidden>Experience</option>
          <option value="2-3yr">2-3 years</option>
          <option value="3+yr">3+ years</option>
          <option value="4+yr">4+ years</option>
        </select>
      </div>

      <div className="w-full">
        <select id="location" name="location" className="border border-gray-300 rounded p-2 mb-4 w-full" onChange={handleFilterChange}>
          <option value="" disabled selected hidden>Location</option>
          <option value="remote">Remote</option>
          <option value="on-site">On-site</option>
        </select>
      </div>

      <div className="w-full">
        <select id="salary" name="salary" className="border border-gray-300 rounded p-2 mb-4 w-full" onChange={handleFilterChange}>
          <option value="" disabled selected hidden>Salary</option>
          <option value="10-20LPA">10-20 LPA</option>
          <option value="20-30LPA">20-30 LPA</option>
          <option value="40-50LPA">40-50 LPA</option>
        </select>
      </div>

      <div className="w-full">
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          placeholder="Search by Company Name"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          onChange={handleCompanySearch}
        />
      </div>
    </div>
  );
};

export default Filter;
