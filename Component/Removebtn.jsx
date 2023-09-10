import React from 'react';

const Removebtn = ({ id }) => {
  const removeTopic = async () => {
    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;  
    const apiUrl = `http://localhost:${apiPort}/api/topics?id=${id}`;

    const confirmed = window.confirm('Are you sure you want to remove?');  

    if (confirmed) {
      const res = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (res.ok) {
        window.location.reload();  
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
