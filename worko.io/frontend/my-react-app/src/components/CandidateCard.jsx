import React from 'react';
import './CandidateCard.css';

const CandidateCard = ({ candidate, onStatusChange, onDelete }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-header">
        <h3>{candidate.name}</h3>
        <span className={`status ${candidate.status.toLowerCase()}`}>{candidate.status}</span>
      </div>
      <div className="candidate-info">
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Job Title:</strong> {candidate.jobTitle}</p>
      </div>
      <div className="candidate-actions">
        <select value={candidate.status} onChange={e => onStatusChange(candidate._id, e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Hired">Hired</option>
        </select>
        <button className="delete-btn" onClick={() => onDelete(candidate._id)}>Delete</button>
      </div>
    </div>
  );
};

export default CandidateCard; 