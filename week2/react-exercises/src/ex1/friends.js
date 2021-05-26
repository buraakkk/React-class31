import React, { useState } from "react";
import Button from "./button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://www.randomuser.me/api?results=1";

  const getFriend = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setFriend(data.results[0]);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
      setError(false);
    }
  };

  return (
    <div className="friend">
      <h1> 👋 Find your friend here 👋 </h1>
      <Button getFriend={getFriend} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      {Object.entries(friend).length > 0 ? (
        <FriendProfile friend={friend} />
      ) : (
        <p>Find your first friend by clicking the button!</p>
      )}
    </div>
  );
};

export default Friend;
