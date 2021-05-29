import React, { useState, useEffect } from "react";
import City from "./City";
import Search from "./Search";

function Weather() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBtn, setSearchBtn] = useState("");

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn}&APPID=${API_KEY}&units=metric`;

  useEffect(() => {
    async function weatherData() {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        condition(res, data);
      } catch (error) {
        fetchError(error);
      } finally {
        fetchFinally();
      }
    }
    async function condition(res, data) {
      switch (res.status) {
        case 200: {
          fetchSuccessful(data);
          break;
        }
        case 404: {
          fetchError(new Error("Not found"));
          break;
        }
        default: {
        }
      }
    }
    async function fetchSuccessful(data) {
      setError(null);
      setCities((cities) => {
        const searchedCity = cities.some(
          (searched) => searched.name === data.name
        );
        if (searchedCity) {
          setError(new Error("City already exist..."));
          return cities;
        }
        return [data, ...cities];
      });
    }
    async function fetchError(err) {
      setError(err);
    }
    async function fetchFinally() {
      setIsLoading(false);
    }
    weatherData();
  }, [searchBtn, url]);

  return (
    <div>
      <Search
        setSearchBtn={setSearchBtn}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {!isLoading && !error && cities.length === 0 && <p>Search a city</p>}

      {cities.length > 0 &&
        cities.map((city) => <City key={city.id} city={city} />)}
    </div>
  );
}

export default Weather;


