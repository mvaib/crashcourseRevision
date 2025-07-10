import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_BASE = 'https://candidate-refral-dashboard.onrender.com/api';

const CandidateContext = createContext();

export const useCandidates = () => useContext(CandidateContext);

export const CandidateProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCandidates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/candidate/get`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success && data.candidates) {
        setCandidates(data.candidates);
      } else {
        setCandidates([]);
      }
    } catch (err) {
      setError('Failed to fetch candidates.');
    }
    setLoading(false);
  }, []);

  const updateCandidateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE}/candidate/update/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });
      fetchCandidates();
    } catch (err) {
      setError('Failed to update status.');
    }
  };

  const deleteCandidate = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE}/candidate/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      fetchCandidates();
    } catch (err) {
      setError('Failed to delete candidate.');
    }
  };

  // Call fetchCandidates on mount
  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  return (
    <CandidateContext.Provider value={{ candidates, loading, error, fetchCandidates, updateCandidateStatus, deleteCandidate }}>
      {children}
    </CandidateContext.Provider>
  );
}; 