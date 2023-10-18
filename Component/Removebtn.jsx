import React from 'react';
import PropTypes from 'prop-types';


const Removebtn = ({ id }) => {
  const removeProduct = async () => {
    const apiPort = process.env.NEXT_PUBLIC_API_PORT || 3000;
    const apiUrl = `http://localhost:${apiPort}/api/products?id=${id}`;

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
    <button className="btn btn-danger" onClick={removeProduct}>
      Remove
    </button>
  );
};

Removebtn.propTypes = {
  id: PropTypes.any.isRequired,
};
export default Removebtn;
