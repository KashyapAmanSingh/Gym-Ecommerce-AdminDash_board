
"use client"
import PropTypes from 'prop-types';

import React, { useState } from 'react';

const EditTopicForm = ({id, topic }) => {
 
  const initialState = {
    title: topic.title,
    description: topic.description,
    price: topic.price,
    stock: topic.stock,
    discount: topic.discount,
    offers: topic.offers,
    category: topic.category,
    brand: topic.brand,
    seller: topic.seller,
    size: topic.size,
    model: topic.model,
    ratings: topic.ratings,
    tags: topic.tags,
    legalDisclaimer: topic.legalDisclaimer,
    manufacturingInfo: topic.manufacturingInfo,
    images: topic.images,
    dateAdded: topic.dateAdded,
  };
  
  const [formData, setFormData] = useState(initialState);
  
  EditTopicForm.propTypes = {
    id: PropTypes.number.isRequired,  
    topic: PropTypes.object.isRequired,  
  };

   


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.title || !formData.description) {
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
        body: JSON.stringify(formData),  
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
    <>
    
    <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="title">Title:</label>


          <input
            type="text"
            placeholder="Topic Title"
            name='title'
            id='title'
            value={formData.title}
            onChange={handleInputChange} />
        </div>        
    
        <div className ="mb-3 mt-3">
  <label htmlFor="description">Description:</label>
  <textarea
    type="text"
    name='description'
    id='description'
    placeholder="Topic Description"
    value={formData.description}
    onChange={handleInputChange}
  ></textarea>
</div>


      
        <div className="mb-3 mt-3">
          <label htmlFor="Price"> Enter Price:</label>

          <input
            type="text"
            name='price'
            id='Price'
            placeholder="Topic Price"
            value={formData.price}
            onChange={handleInputChange} />



        </div>
        <div className="mb-3 mt-3">
          <label htmlFor=" stock">  Enter Stock:</label>


          <input
            type="text"
            placeholder="Topic stock"
            name='stock'
            id='stock'
            value={formData.stock}
            onChange={handleInputChange} />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="discount">Enter Discount:</label>

          <input
            type="text"
            name='discount'
            id='discount'
            placeholder="Topic discount"
            value={formData.discount}
            onChange={handleInputChange} />

        </div>


        <div className="mb-3 mt-3">
          <label htmlFor="offers">Enter Offers:</label>


          <input
            type="text"
            name='offers'
            id='offers'
            placeholder="Topic offers"
            value={formData.offers}
            onChange={handleInputChange} />


        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="category">Enter Category:</label>


          <select
            className ="form-select"
            name='category'
            id='category'
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            {["Supplements", "Equipment", "Footwear", "Nutrition"].map((tagValue,ind) => (
              <option value={tagValue} key={ind}>{tagValue}</option>
            ))}
          </select>




        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="brand">Enter Brand Name:</label>


          <input
            type="text"
            placeholder="Topic brand"
            name='brand'
            id='brand'
            value={formData.brand}
            onChange={handleInputChange} />

        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="seller"> Enter Seller Name:</label>


          <input
            type="text"
            placeholder="Topic seller"
            name='seller'
            id='seller'
            value={formData.seller}
            onChange={handleInputChange} />




        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="size">Enter Size:</label>


          <input
            type="text"
            placeholder="Topic size"
            name='size'
            id='size'
            value={formData.size}
            onChange={handleInputChange} /> </div>
          <div className="mb-3 mt-3">

            <label htmlFor="model">Enter Model Name/Number:</label>


            <input
              type="text"
              placeholder="Topic model"
              name='model'
              id='model'
              value={formData.model}
              onChange={handleInputChange} />



          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="ratings">Give Rating:</label>


            <input
              type="text"
              placeholder="Topic ratings"
              name='ratings'
              id='ratings'
              value={formData.ratings}
              onChange={handleInputChange} />


          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="tags">Enter Tags:</label>
            <select
              className ="form-select"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              {["new Arrival", "Popular", "oldest Arrival", "Months Trending", "Assured"].map((tagValue,ind) => (
                <option value={tagValue} key={ind}>{tagValue}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="legalDisclaimer">LegalDisclaimer:</label>

            <div className ="mb-3 mt-3">
        <label htmlFor="legalDisclaimer">LegalDisclaimer:</label>
        <textarea
          type="text"
          name="legalDisclaimer"
          id="legalDisclaimer"
          placeholder="Topic legalDisclaimer"
          value={formData.legalDisclaimer}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="manufacturingInfo">ManufacturingInfo:</label>
        <textarea
          type="text"
          name="manufacturingInfo"
          id="manufacturingInfo"
          placeholder="Topic manufacturingInfo"
          value={formData.manufacturingInfo}
          onChange={handleInputChange}
        />
      </div>
      


              
                </div>
            
            <button type="submit" className="btn btn-info mt-1">
              Update topics
            </button>
          </form>
          </>
        );
        };

        export default EditTopicForm;
      
