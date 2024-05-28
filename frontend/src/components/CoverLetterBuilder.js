import React, { useState } from 'react';

const CoverLetterBuilder = () => {
  const [coverLetter, setCoverLetter] = useState({
    recipient: '',
    body: '',
    closing: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoverLetter({ ...coverLetter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to the backend
    console.log(coverLetter);
  };

  return (
    <div>
      <h2>Build Your Cover Letter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="recipient"
          placeholder="Recipient"
          value={coverLetter.recipient}
          onChange={handleChange}
        />
        <textarea
          name="body"
          placeholder="Body"
          value={coverLetter.body}
          onChange={handleChange}
        />
        <textarea
          name="closing"
          placeholder="Closing"
          value={coverLetter.closing}
          onChange={handleChange}
        />
        <button type="submit">Generate Cover Letter</button>
      </form>
    </div>
  );
};

export default CoverLetterBuilder;
