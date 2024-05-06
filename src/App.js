
import React from 'react';
import Filter from './components/Filter';
import JobList from './components/JobList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter />
        </div>

        <div>
          <JobList />
        </div>
      </div>



    </div>
  );
};

export default App;
