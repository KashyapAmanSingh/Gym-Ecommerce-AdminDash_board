import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import cloudinary from 'cloudinary-core'; // Import the Cloudinary library

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dm2wuzfzc' });

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [OptimisedImageUrl, setOptimisedImageUrl] = useState('');

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
          const optimizedImageUrl = cloudinaryCore.url(secure_url, {
            width: 500, // Specify the desired width
            crop: 'fill', // Choose the cropping mode
            quality: 'auto', // Automatically adjust image quality
            fetch_format: 'auto', // Automatically select the best format
          });

          setOptimisedImageUrl(optimizedImageUrl);
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

      {OptimisedImageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={OptimisedImageUrl} alt="Uploaded" />
          <p>This is the final URL: {OptimisedImageUrl}</p>
        </div>
      )}
    </div>
  );
}

export default ImageUpload;




