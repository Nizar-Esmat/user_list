import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Data from '../data/Data';

export default function User_list() {
  const [search, setSearch] = useState(""); 

  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

 
  const handleReset = () => {
    setSearch('');
  };

  return (
    <div >
      <div className="p-5">
        <div className="col-md-6 d-flex justify-content-between align-items-center">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by name, email, or phone"
            className="form-control me-3"
          />
          <button onClick={handleReset} className="btn btn-danger">
            Reset
          </button>
        </div>
      </div>
     
      <Data search={search} />
    </div>
  );
}
