import React, { useEffect, useState } from 'react';
import './index.css';

const App = () => {

  const [city, setcity] = useState(null);
  const [search, setsearch] = useState("Kaithal");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=1f7ee3e188604ea1dc5391550bc57198`;
      const resp = await fetch(url);
      const actdata = await resp.json();
      setcity(actdata.main);
    };
    fetchapi();
  }, [search]);

  return (
    <>
      <div className='box'>
        <div className='inputData'>
          <input classname="inputField" type="search"
            value={search}
            onChange={(event) => setsearch(event.target.value)}
          />
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) :
          (
            <div>
              <div className="info">
                <h2 className="location">
                <i class="fa-solid fa-street-view"> {search}</i>
                </h2>
                <h1 className="temp">{city.temp}°cel</h1>
                <h3 className="tempmin_max">Min: {city.temp_min}°cel | Max: {city.temp_max}°cel</h3>
              </div>

              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>

            </div>
          )
        }
      </div>
    </>
  )
}

export default App;
