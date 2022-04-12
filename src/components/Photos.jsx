import React from "react";
const Photos = ({ photos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group">
      {photos.map((photo) => (
        <img key={photo.id} alt="pic" src={photo.download_url}></img>
      ))}
    </ul>
  );
};

export default Photos;
