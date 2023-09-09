"use client"
import React, { useState } from 'react';
import ImageUpload from '../../../Component/Cloudnary';
 
const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [optimisedImageUrl, setOptimisedImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !optimisedImageUrl) {
      alert("Please enter a title, description, and optimised image URL.");
      return;
    }

    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    const apiUrl = `http://localhost:${apiPort}/api/topics`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, image: optimisedImageUrl })
      });

      if (res.ok) {
        console.log(res.ok);
        window.location.href = '/';
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
        <input type="text" placeholder='Topic Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input type="text" placeholder='Topic Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <input type="text" placeholder='Topic Optimised Image URL' value={optimisedImageUrl}  onChange={(e) => setOptimisedImageUrl(e.target.value)} />
        <br />
        <button type="submit" className='btn btn-info mt-1'>Add topics</button>
      </form>
      <ImageUpload setOptimisedImageUrl={setOptimisedImageUrl} OptimisedImageUrl={optimisedImageUrl} />
    </div>
  );
}

export default AddTopic;
