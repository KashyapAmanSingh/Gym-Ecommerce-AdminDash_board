"use client"

import React, { useState } from 'react';

const EditTopicForm = ({ id, title, description }) => {
 
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!newTitle || !newDescription) {
      alert('Please enter a title and description.');
      return;
    }
  

  
    try {
      const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
      const apiUrl = `http://localhost:${apiPort}/api/topics/${id}`;
      const res = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
 
if (!res.ok) {
  throw new Error(`Failed to update`);
} else {
  window.location.href = "/";
}

    } catch (error) {
      console.error('Updation error:', error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Topic Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Topic Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-info mt-1">
          Update topics
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
