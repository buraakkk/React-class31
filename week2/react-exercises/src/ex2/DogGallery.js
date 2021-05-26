import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://dog.ceo/api/breeds/image/random";

  async function getDogPhoto() {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDogPhotos((prevState) => [...prevState, data.message]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
      setError(false);
    }
  }

  return (
    <div className="dog">
      <h1> 👋 Find your dog here 👋 </h1>
      <Button getDogPhoto={getDogPhoto} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {dogPhotos.length > 0 ? (
        dogPhotos.map((dogPhotoUrl) => <DogPhoto dogPhoto={dogPhotoUrl} />)
      ) : (
        <p>Get your first dog by clicking the button!</p>
      )}
    </div>
  );
};

export default DogGallery;
