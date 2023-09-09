import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'bofedne7');

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dm2wuzfzc/image/upload',
          formData
        );

        if (response.status === 200) {
          const { secure_url } = response.data;
          setImageUrl(secure_url);
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Image upload error:', error);
      }
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileSelect}
      />
      <button type="button" onClick={handleImageUpload}>
        Upload Image
      </button>

      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;






// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'dm2wuzfzc',
//   api_key: '187424734279379',
//   api_secret: 'X-nlZM36YigMzYyDOSgAdw3YP-o',
// });

// // module.exports = cloudinary;

