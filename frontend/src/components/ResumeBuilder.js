import React, { useState } from 'react';
import './ResumeBuilder.css';
import '../fonts/twitch/twitch.ttf'

const ResumeBuilder = () => {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="resume-builder">
      <nav className="top-nav">
        <ul>
          <li><a href="#cover-letter">Cover Letter</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#my-resumes">My Resumes</a></li>
          <li><a href="#my-cover-letters">My Cover Letters</a></li>
        </ul>
      </nav>
      <h1>Resume Builder</h1>
      <div class="subtitle-h1">Craft Resumes, That Click.</div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="job-description"
        />
        <div className="resume-actions">
          <label htmlFor="resume-upload" className="upload-button">Upload Resume</label>
          <input
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="file-input"
          />
          <button type="button" className="existing-resume-button">Use Existing Resume</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
      <footer className="footer">
        <div className="footer-content">
          <span>© 2024 Sam1nSattik, LLC. All rights reserved.</span>
          <img src={"../logos/github-logo.png"} alt="Github Logo" className="footer-logo" />
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
