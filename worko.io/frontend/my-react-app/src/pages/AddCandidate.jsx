import React, { useState } from 'react';
import { useCandidates } from '../context/CandidateContext';
import './AddCandidate.css';

const API_BASE = 'https://candidate-refral-dashboard.onrender.com/api'; // Replace with your backend

const AddCandidate = ({ onAdded }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', jobTitle: '', resume: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { fetchCandidates } = useCandidates();

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f => ({ ...f, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('jobTitle', form.jobTitle);
      if (form.resume) formData.append('resume', form.resume);
      // Removed userId from formData
      const res = await fetch(`${API_BASE}/candidate/add`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', jobTitle: '', resume: null });
        fetchCandidates();
        setTimeout(() => onAdded && onAdded(), 1200);
      } else {
        setError(data.msg || 'Failed to add candidate');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="add-candidate-container">
      <h2 className="add-candidate-title">Add Candidate</h2>
      <form onSubmit={handleSubmit} className="add-candidate-form">
        <label>Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Phone
          <input name="phone" value={form.phone} onChange={handleChange} required pattern="\d{10}" maxLength={10} />
        </label>
        <label>Job Title
          <input name="jobTitle" value={form.jobTitle} onChange={handleChange} required />
        </label>
        <label>Resume (PDF only)
          <input name="resume" type="file" accept="application/pdf" onChange={handleChange} />
        </label>
        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">Candidate added! Redirecting...</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Candidate'}
        </button>
      </form>
    </div>
  );
};

export default AddCandidate; 