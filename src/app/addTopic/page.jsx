"use client"
import React, { useState } from 'react';

const AddTopic = () => {
  const [title, setTitles] = useState('');
  const [description, setdescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!title || !description) {
      alert("Please enter a title and description.");
      return;
    }

    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    const apiUrl = `http://localhost:${apiPort}/api/topics`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      });

      if (res.ok) {
        console.log(res.ok);
        return (
          window.location.href = '/'
        );
      } else {
        throw new Error("Sorry, we failed to create Topics");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Topic Title' value={title} onChange={(e) => setTitles(e.target.value)} />
        <br />
        <input type="text" placeholder='Topic Description' value={description} onChange={(e) => setdescription(e.target.value)} />
        <br />
        <button type="submit" className='btn btn-info mt-1' >Add topics</button>
      </form>
    </div>
  );
}

export default AddTopic;
