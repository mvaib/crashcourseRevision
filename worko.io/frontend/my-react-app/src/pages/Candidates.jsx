import React from 'react';
import CandidateCard from '../components/CandidateCard';
import { useCandidates } from '../context/CandidateContext';
import './Candidates.css';

const Candidates = () => {
  const { candidates, loading, error, updateCandidateStatus, deleteCandidate } = useCandidates();

  return (
    <div className="candidates-container">
      <h2 className="candidates-title">Candidates</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {(!loading && candidates.length === 0) && <p>No candidates found.</p>}
      <div className="candidates-list">
        {candidates.map(candidate => (
          <CandidateCard
            key={candidate._id}
            candidate={candidate}
            onStatusChange={updateCandidateStatus}
            onDelete={deleteCandidate}
          />
        ))}
      </div>
    </div>
  );
};

export default Candidates; 