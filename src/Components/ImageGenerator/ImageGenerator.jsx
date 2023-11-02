import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState(null);
  let inputRef = useRef(null);
  const sizeRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === '') {
      return;
    }
    setLoading(true);
    const selectedSize = sizeRef.current.value;
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer API key goes here',
        'User-Agent': 'Chrome',
      },
      body: JSON.stringify({
        prompt: `${inputRef.current.value}`,
        n: 1,
        size: selectedSize,
      }),
    });

    if (response.ok) {
      try {
        let data = await response.json();
        let data_array = data.data;

        if (data_array && data_array.length > 0) {
          setImage_url(data_array[0].url);
        } else {
          console.error('No image data found.');
        }
      } catch (error) {
        console.error('Error while processing API response:', error);
      }
    } else {
      console.error('API request failed with status: ' + response.status);
    }

    setLoading(false);
  };

  const downloadImage = () => {
    if (image_url) {
      const a = document.createElement('a');
      a.href = image_url;
      a.download = 'generated_image.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error('Image URL is not available.');
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={image_url || default_image} alt="" />
        </div>
        <div className="loading">
          <div className={loading ? 'loading-bar-full' : 'loading-bar'}>
            <div className={loading ? 'loading-text' : 'display-none'}>Loading...</div>
          </div>
        </div>
      </div>
      <div className="search-box">
        <input type="text" ref={inputRef} className="search-input" placeholder="Describe what you want to generate" />
        <select ref={sizeRef} className="size-select">
          <option value="128x128">128x128</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
          {/* Add more size options as needed */}
        </select>
        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>
      </div>
      <div>
        <div className="downloadImage-btn" onClick={downloadImage}>
          Download Image
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
