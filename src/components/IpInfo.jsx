import React from "react";
import classes from "./IpInfo.module.css";
import Loading from "./UI/Loading";
const IpInfo = (props) => {
  return (
    <div className={classes["ip-info"]}>
      <div>
        <h3>IP ADDRESS</h3>
        <p>{props.data.ip}</p>
      </div>

      <div>
        <h3>LOCATION</h3>
        <p>{`${props.data.location.city} ${props.data.location.region}, ${props.data.location.country}`}</p>
      </div>
      <div>
        <h3>TIMEZONE</h3>
        <p>{props.data.location.timezone}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{props.data.isp}</p>
      </div>
    </div>
  );
};

export default IpInfo;
