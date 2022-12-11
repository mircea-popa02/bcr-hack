import classes from "./BigNews.module.css";
import photo from "../images/Capture.PNG";
import MyMap from "./GoogleMap";
import budgie from "../images/animals/budgie.jpg";
import bunny from "../images/animals/bunny.jpg";
import cat from "../images/animals/cat.png";
import hamster from "../images/animals/hamster.jpg";
import labrador from "../images/animals/labrador.jpg";
import lizard from "../images/animals/lizard.jpg";
import pug from "../images/animals/pug.jpg";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";
import { Link } from "react-router-dom";

const deliverPhoto = (species) => {
  switch (species) {
    case "labrador":
      return labrador;
    case "pug":
      return pug;
    case "cat":
      return cat;
    case "hamster":
      return hamster;
    case "lizard":
      return lizard;
    case "bunny":
      return bunny;
    case "budgie":
      return budgie;
    default:
      return;
  }
};

const BigNews = (props) => {
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [newBank, setNewBank] = useState({});
  const [myAddress, setMyAddress] = useState({});
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1); // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    const fetchBanksCoords = async () => {
      Geocode.setApiKey("AIzaSyDtMSRiyaavuMQA_DFwYglfSGCDKSd6zbc");
      Geocode.setLocationType("ROOFTOP");
      const response = await Geocode.fromAddress(props.bank.address);
      const res2 = await Geocode.fromAddress(localStorage.getItem("location"));
      setMyAddress(res2.results[0].geometry.location);
      // console.log(response.results[0].geometry.location);
      setLng(response.results[0].geometry.location.lng);
      setLat(response.results[0].geometry.location.lat);

      setNewBank({ ...props.bank, lat, lng });
      setDistance(
        getDistanceFromLatLonInKm(
          myAddress.lat,
          myAddress.lng,
          newBank.lat,
          newBank.lng
        )
      );
      console.log(myAddress);
      console.log(distance);
    };
    fetchBanksCoords();
  }, [myAddress]);

  const onClickHandler = () => {
    localStorage.setItem("chosenBank", JSON.stringify(props.bank));
  };

  return (
    <div className={classes["wrapper"]}>
      <h1>Detalii despre locație</h1>
      <div className={classes["big-news-container"]}>
        <h2 className={classes.animalName}>{props.bank.name}</h2>
        <div className={classes["big-news-header"]}>
          <div className={classes.firstgroup}>
            <div className={classes["big-news-text"]}>
              <p> {distance.toFixed(0) !== '0' ? `Distanță: ${distance.toFixed(0)}Km` : `${''}` }</p>
              
              <p>{props.bank.city}</p>
              <p>{props.bank.address}</p>
              <p>Retarageri în Euro: {props.bank.euro}</p>
              <p>Plăți contactless: {props.bank.contactless}</p>
            </div>
          </div>
        </div>
        <div className={classes["big-news-map"]}>
          {lat !== 0 ? <MyMap latitude={lat} longitude={lng} /> : null}
        </div>
        <Link to={`/form`} className={classes["btn--news2"]}>
          <span onClick={onClickHandler}>Selectează</span>
        </Link>
      </div>
    </div>
  );
};

export default BigNews;
