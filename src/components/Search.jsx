import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by text or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
