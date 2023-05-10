import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import IpInfo from "./IpInfo";
import IconArrow from "./UI/IconArrow";
import Loading from "./UI/Loading";

const Header = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchIP, setSearchIP] = useState("");
  const [IpData, setIpData] = useState({
    ip: "",
    location: {
      region: "",
      country: "",
      timezone: "",
    },
    isp: "",
  });
  useEffect(() => {
    fetchData("");
  }, []);

  const fetchData = (searchParam) => {
    setIsLoading(true);
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_8WUvpBDQgPlJ116BlkhBZm8Ih7Aoz&domain=${searchParam}`
    )
      .then((res) => {
        if (!res.ok)
          throw new Error(
            "Something went wrong. Please enter a valid IP address."
          );
        return res.json();
      })
      .then((data) => {
        setIpData(data);
        props.onGetCoords([data.location.lat, data.location.lng]);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setIsLoading(false);
      });
    setSearchIP("");
  };
  const IpSearchHandler = (event) => {
    setSearchIP(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    fetchData(searchIP);
  };
  return (
    <header className={classes.header}>
      <h1>Ip Address Tracker</h1>
      <form onSubmit={submitHandler}>
        <input
          value={searchIP}
          onChange={IpSearchHandler}
          type="text"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit">
          <IconArrow />
        </button>
      </form>

      {isLoading && <Loading />}
      {!isLoading && <IpInfo data={IpData} />}
    </header>
  );
};

export default Header;
