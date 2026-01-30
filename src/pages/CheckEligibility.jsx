import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './CheckEligibility.css';


function CheckEligibility() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    category: '',
    state: '',
    gender: ''
  });

  //
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  //added all types ---->categories
  const categories = ['General','OBC', 'SC', 'ST', 'EWS'];
  const states = [
    'Andhra Pradesh', 
    'Arunachal Pradesh', 'Assam', 
    'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 
    'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate_size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.checkEligibility({
        ...formData,
        age: parseInt(formData.age),
        income: parseFloat(formData.income)
      });

      // Navigate to results (karna hai)
      navigate('/results', { state: { schemes: response.data.schemes } });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to check eligibility. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="eligibility-page page-container">
      <div className="container">
        <div className="eligibility-header fade-in">
          <h1 className="page-title">Check Your Eligibility</h1>
          <p className="page-subtitle">
            Fill in your details to discover welfare schemes you're eligible for
          </p>
        </div>

        <div className="eligibility-container">
          {/* Info Panel */}
          <div className="info-panel slide-in-left">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h3 className="info-title">How it Works</h3>
              <ol className="info-steps">
                <li>Fill in your personal details</li>
                 <li>Upload supporting documents (optional)</li>
                <li>Get instant matching results</li>
                 <li>Apply for eligible schemes</li>
              </ol>
            </div>

            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3 className="info-title">Your Data is Safe</h3>
               
               <p className="info-text">
              
               We use bank-level encryption to protect your personal information. 
                Your data is never shared with third parties.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h3 className="info-title">Quick Tips</h3>
              <ul className="info-list">

                 <li>Provide accurate information</li>
                 <li>Upload clear document scans</li>
                 <li>Check all matched schemes</li>

              </ul>
            </div>
          </div>

          {/* Form Panel */}
          <div className="form-panel fade-in">
             {error && (
              <div className="alert alert-error">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
                   <path d="M10 6V10M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                 </svg>
              {error}
              </div>
            )}

            <form className="eligibility-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age" className="form-label">Age *</label>
                  <input
                    
                    type="number"
                    id="age"
                    name="age"
                    className="form-input"
                   //
                    placeholder="Enter your age"
                    value={formData.age}
                    
                    onChange={handleChange}
                    required
                    min="1"
                    max="120"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender" className="form-label">Gender *</label>
                  <select
                    
                    id="gender"
                    name="gender"
                   
                    className="form-input"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                     <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="income" className="form-label">Annual Income (₹) *</label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  className="form-input"
                  placeholder="Enter annual income"
                  value={formData.income}
                  onChange={handleChange}
                  required
                  min="0"
                  step="1000"
                />
                <p className="form-hint">Enter your total annual household income</p>
              </div>
           
              <div className="form-group">
                <label htmlFor="category" className="form-label">Category *</label>
                <select
                  id="category"
                  name="category"
                  className="form-input"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="state" className="form-label">State *</label>
                <select

                  id="state"
                  name="state"
                  className="form-input"
                   value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select state</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="document" className="form-label">
                  Upload Document (Optional)
                </label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="document"
                    className="file-input"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="document" className="file-input-label">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4V12M10 4L7 7M10 4L13 7" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 12V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V12" 
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {file ? file.name : 'Choose file or drag here'}
                  </label>
                </div>
                <p className="form-hint">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-large" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Checking Eligibility...
                  </>
                ) : (
                  <>
                    Check Eligibility
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
               </form>
          </div>
         </div>
       </div>
    </div>
  );
}

export default CheckEligibility;