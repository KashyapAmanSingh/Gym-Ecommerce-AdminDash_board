import React from 'react';

const Removebtn = ({ id }) => {
  const removeTopic = async () => {
    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000; // Default to 3000 if not set
    const apiUrl = `http://localhost:${apiPort}/api/topics?id=${id}`;

    const confirmed = window.confirm('Are you sure you want to remove?'); // Use window.confirm

    if (confirmed) {
      const res = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (res.ok) {
        window.location.reload(); // Reload the page
      }
    }
  };

  return (
    <button className="btn btn-danger" onClick={removeTopic}>
      Remove
    </button>
  );
};

export default Removebtn;
