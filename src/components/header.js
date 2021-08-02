import header from "../images/pattern-bg.png";
import { useSelector, useStore } from "react-redux";
import { useEffect, useState } from "react";
import {
  changeIp,
  changeIsp,
  changeLat,
  changeLng,
  changeLocation,
  changeTimezone,
} from "../store/actions";

export default function Header() {
  const store = useStore();
  const url =
    "https://geo.ipify.org/api/v1?apiKey=at_jnXnA00gSmIvVOmqqOa97ewrn0gG6&ipAddress=8.8.8.8";
  const ipAddress = useSelector((state) => state.ipAddress);
  const [imputtedIp, setImputtedIp] = useState("");
  const [alert, setAlert] = useState(false);
  const location = useSelector((state) => state.location);
  const timezone = useSelector((state) => state.timezone);
  const isp = useSelector((state) => state.isp);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let location =
          data.location.city +
          ", " +
          data.location.region +
          ", " +
          data.location.postalCode;
        store.dispatch(changeIp(data.ip));
        store.dispatch(changeLocation(location));
        store.dispatch(changeTimezone(data.location.timezone));
        store.dispatch(changeIsp(data.isp));
        store.dispatch(changeLat(data.location.lat));
        store.dispatch(changeLng(data.location.lng));
      });
  }, [store]);

  function handleSearch(ipAddress) {
    function validURL(str) {
      var pattern = new RegExp(
        "(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
        "i"
      );
      return !!pattern.test(str);
    }

    if (validURL(imputtedIp)) {
      setAlert(false);
      fetch(
        "https://geo.ipify.org/api/v1?apiKey=at_jnXnA00gSmIvVOmqqOa97ewrn0gG6&domain=" +
          imputtedIp,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let location =
            data.location.city +
            ", " +
            data.location.region +
            ", " +
            data.location.postalCode;
          store.dispatch(changeIp(data.ip));
          store.dispatch(changeLocation(location));
          store.dispatch(changeTimezone(data.location.timezone));
          store.dispatch(changeIsp(data.isp));
          store.dispatch(changeLat(data.location.lat));
          store.dispatch(changeLng(data.location.lng));
        });
    } else {
      setAlert(true);
    }
  }

  return (
    <div
      className="row no-gutters pb-5"
      style={{
        backgroundImage: "url(" + header + ")",
        backgroundRepeat: "round",
      }}
    >
      <div className="row justify-content-center w-100 no-gutters">
        <h1 className="text-white pt-5">IP Address Tracker</h1>
      </div>
      <div className="row w-100 justify-content-center pt-3 pb-5 no-gutters">
        <div
          className="col-sm-2 col-lg-4 bg-white"
          style={{ borderRadius: 15 + "px" }}
        >
          <form>
            <div className="form-row ml-3">
              <div className="col-10 mt-2 mb-2 ">
                <input
                  type="text"
                  className="form-control border-0 "
                  placeholder="Search for an IP address or domain"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  style={{ boxShadow: "none", cursor: "pointer" }}
                  onChange={(event) => setImputtedIp(event.target.value)}
                  onKeyPress={(event) =>
                    event.key === "Enter" ? event.preventDefault() : ""
                  }
                />
              </div>
              <div
                className="col-2 text-white  stretched-link d-flex justify-content-center"
                onClick={() => handleSearch(imputtedIp)}
                style={{
                  borderRadius: "0 15px 15px 0",
                  userSelect: "none",
                  cursor: "pointer",
                  fontSize: "2em",
                  backgroundColor: "#010000",
                }}
              >
                <b>></b>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="row no-gutters justify-content-center w-100"
        style={{ position: "absolute", marginTop: "210px", zIndex: 1 }}
      >
        <div className="col-8">
          <div
            className="row px-5 bg-white py-3"
            style={{ borderRadius: 15 + "px" }}
          >
            <div className="col">
              <p style={{ color: "#959595" }}>
                <b>IP ADDRESS</b>
              </p>
              <h3>{ipAddress}</h3>
            </div>
            <div
              className="mr-5 mt-2"
              style={{ borderLeft: "1px solid #dddddd", height: "80px" }}
            ></div>
            <div className="col pl-0">
              <p style={{ color: "#959595" }}>
                <b>LOCATION</b>
              </p>
              <h3>{location}</h3>
            </div>
            <div
              className="mr-5 mt-2"
              style={{ borderLeft: "1px solid #dddddd", height: "80px" }}
            ></div>
            <div className="col pl-0">
              <p style={{ color: "#959595" }}>
                <b>TIMEZONE</b>
              </p>
              <h3>UTC {timezone}</h3>
            </div>
            <div
              className="mr-5 mt-2"
              style={{ borderLeft: "1px solid #dddddd", height: "80px" }}
            ></div>
            <div className="col pl-0">
              <p style={{ color: "#959595" }}>
                <b>ISP</b>
              </p>
              <h3>{isp}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
