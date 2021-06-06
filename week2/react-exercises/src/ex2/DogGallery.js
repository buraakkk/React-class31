import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://dog.ceo/api/breeds/image/random";

  const getDogPhoto = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setDogPhotos((prevState) => [data.message, ...prevState]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
      setError(false);
    }
  };

  return (
    <div className="dog">
      <h1> 👋 Find your dog here 👋 </h1>
      <Button getDogPhoto={getDogPhoto} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {dogPhotos.length > 0 ? (
        dogPhotos.map((photoURL) => (
          <DogPhoto key={photoURL.id} dogPhoto={photoURL} />
        ))
      ) : (
        <p>Get your first dog by clicking the button!</p>
      )}
    </div>
  );
};

export default DogGallery;
