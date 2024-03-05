
import React, { useState } from 'react';
import { uploadImage } from '../../services/images';

function AddImage() {
  const [description, setDescription] = useState('');
  const [imageName, setImageName] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [error, setError] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await uploadImage({ description, imageName, category, source });
    
    } catch (err) {
      setError('Error uploading image');
    }
  };

  return (
    <div>
      <h2>Add Image</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleUpload}>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Image Name" value={imageName} onChange={(e) => setImageName(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AddImage;
