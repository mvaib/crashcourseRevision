import React, { useState } from 'react';
import { useCandidates } from '../context/CandidateContext';
import './Dashboard.css';

const Dashboard = () => {
  const { candidates, loading, error } = useCandidates();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Filter candidates by job title or status
  const filteredCandidates = candidates.filter(c => {
    const jobMatch = c.jobTitle.toLowerCase().includes(search.toLowerCase());
    const statusMatch = statusFilter ? c.status === statusFilter : true;
    return jobMatch && statusMatch;
  });

  return (
    <div className="dashboard-container">
      <h2 style={{ color: '#7b9cff', marginBottom: '2rem' }}>Dashboard</h2>
      <div className="dashboard-quickstats">
        <h3>Quick Stats</h3>
        <div className="dashboard-quickstats-total">{candidates.length}</div>
        <div className="dashboard-quickstats-label">Total Candidates</div>
      </div>
      <div className="dashboard-searchbar">
        <input
          type="text"
          placeholder="Search by job title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Hired">Hired</option>
        </select>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {(!loading && filteredCandidates.length === 0) && <p>No candidates found.</p>}
      <div className="dashboard-candidate-list">
        {filteredCandidates.map(candidate => (
          <div key={candidate._id} className="dashboard-candidate-card">
            <div>
              <div className="dashboard-candidate-info">{candidate.name}</div>
              <div className="dashboard-candidate-job">{candidate.jobTitle}</div>
            </div>
            <span className={`dashboard-candidate-status ${candidate.status.toLowerCase()}`}>
              {candidate.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 