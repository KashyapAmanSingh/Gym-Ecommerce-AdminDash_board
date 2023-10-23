"use client"
import React, { useState } from 'react';

import { NextResponse } from 'next/server';
import ImageUpload from '../Cloudnary';

const AddProducts = () => {
  const [OptimisedImageUrl, setOptimisedImageUrl] = useState([]);
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: 0,
    stock: 0,
    discount: 0,
    offers: '',
    category: '',
    subcategory: '',
    brand: '',
    seller: '',
    size: 0,
    model: '',
    ratings: 0,
    is_featured: false,
    tags: 'new Arrival',
    legalDisclaimer: '',
    manufacturingInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'tags' && value === '') {
      setProductData({ ...productData, [name]: 'new Arrival' });
    }

    if (name === 'category' && value === '') {
      setProductData({ ...productData, [name]: 'Supplements' });
    }
    if (name === 'is_featured') {
      setProductData({ ...productData, [name]: !productData.is_featured });
    }
    else {
      setProductData({ ...productData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({
          ...productData,

          images: OptimisedImageUrl,
          dateAdded: new Date(),
        }),


      });
      if (res.ok) {

        window.location.href = '/';
      } else {
        throw new Error("Sorry, we failed to create Product");
      }
    } catch (error) {
      console.error(error);
      return NextResponse.error("Failed to create the Product", { status: 500 });
    }



  };

  const fieldNames = [
    'title',
    'price',
    'stock',
    'discount',
    'offers',
    'subcategory',
    'brand',
    'seller',
    'size',
    'model',
 
  ];
  // 'rating',

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            {fieldNames && fieldNames.map((fieldName, ind) => (
              <div key={ind} className="col-md-6 mb-3 mt-3">
                <label htmlFor={fieldName}>{fieldName}:</label>
                <input
                  type="text"
                  placeholder={`Enter ${fieldName}`}
                  className="form-control"
                  name={fieldName}
                  id={fieldName}
                  value={productData[fieldName]}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            ))}
          </div>

           
          <div className="mb-3 mt-3">
            <label htmlFor="description">Description:</label>
            <textarea
              placeholder="Product Description"
              className="form-control"
              rows="5"
              name="description"
              id="description"
              value={productData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>  


          {/* Enter Category */}
          <div className="mb-3 mt-3">
            <label htmlFor="category">Enter Category:</label>
            <select
              className="form-select"
              name="category"
              id="category"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {["Supplements", "Equipment", "Footwear", "Nutrition", "Others"].map((tagValue, index) => (
                <option key={index} value={tagValue}>
                  {tagValue}
                </option>
              ))}
            </select>
          </div>

          {/* Featured Product */}
          <div className="mb-3 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="is_featured_checkbox"
                name="is_featured"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="is_featured_checkbox">Featured Product</label>
            </div>
          </div>

          {/* Enter Tags */}
          <div className="mb-3 mt-3">
            <label htmlFor="tags">Enter Tags:</label>
            <select
              className="form-select"
              id="tags"
              name="tags"
              value={productData.tags}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              {["new Arrival", "Popular", "oldest Arrival", "Months Trending", "Assured", "Others"].map((tagValue, index) => {
                return (
                  <option key={index} value={tagValue}>
                    {tagValue}
                  </option>
                );
              })}
            </select>
          </div>



          <div className="mb-3 mt-3">
            <label htmlFor="legalDisclaimer">LegalDisclaimer:</label>

            <textarea className="form-control" type="text" placeholder='Enter legalDisclaimer' name='legalDisclaimer' id='legalDisclaimer' value={productData.legalDisclaimer} onChange={handleChange} ></textarea>

          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="manufacturingInfo">ManufacturingInfo:</label>
            <textarea className="form-control" type="text" placeholder='Enter manufacturingInfo' name='manufacturingInfo' id='manufacturingInfo' value={productData.manufacturingInfo} onChange={handleChange} ></textarea>
 
          </div>
 
          <button type="submit" className="btn btn-info mt-1">Add Products</button>
        </div>
      </form>
      <ImageUpload setOptimisedImageUrl={setOptimisedImageUrl} OptimisedImageUrl={OptimisedImageUrl} />
    </div>
  );



}

export default AddProducts


//form to add remove delete