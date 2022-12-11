import "./App.css";
import AuthPage from "./pages/AuthPage";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthContext from "./store/auth-context";
import { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { storage } from "./store/firebase";
import Speech from "./pages/Speech";

import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import FormPage from "./pages/FormPage";
import Confirmation from "./pages/Confirmation";

function App() {
  const authCtx = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const [banks, setBanks] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const imagesListRef = ref(storage, "images/");
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/` + imageUpload.name);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      // console.log(response.items[0]._location.path_);
      const certain = response.items;
      // .filter((item) => {
      //   if (item._location.path_.includes("budgie")) {
      //     return item;
      //   }
      // });

      // console.log(certain);
      certain.forEach((item) => {
        return getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          // console.log(url);
        });
      });
    });
  }, []);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch(
        "https://paws-b59ae-default-rtdb.europe-west1.firebasedatabase.app/pets.json"
      );
      if (!response) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedPets = [];

      for (const key in responseData) {
        loadedPets.push({
          key: key,
          id: key,
          name: responseData[key].name,
          species: responseData[key].species,
          date: responseData[key].date,
          place: responseData[key].place,
          age: responseData[key].age,
          ownersName: responseData[key].ownersName,
          ownersPhone: responseData[key].ownersPhone,
          ownersEmail: responseData[key].ownersEmail,
        });
      }
      setPets(loadedPets);
    };
    fetchPets();
  }, []);

  useEffect(() => {
    const fetchBanks = async () => {
      const response = await fetch(
        "https://bcr-hack-c264b-default-rtdb.europe-west1.firebasedatabase.app/banks.json"
      );
      if (!response) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedBanks = [];

      for (const key in responseData) {
        loadedBanks.push({
          key: key,
          id: key,
          name: responseData[key].name,
          code: responseData[key].code,
          address: responseData[key].address,
          city: responseData[key].city,
          county: responseData[key].county,
          euro: responseData[key].euro,
          contactless: responseData[key].contactless,
        });
      }
      setBanks(loadedBanks);
    };
    fetchBanks();
  }, []);

  // cconsole.log(banks[0]);

  // setTimeout(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   });
  // }, 5000);

  // Geocode.setApiKey("AIzaSyDtMSRiyaavuMQA_DFwYglfSGCDKSd6zbc");
  // Geocode.setLocationType("ROOFTOP");
  // if (navigator.geolocation) {
  //   // alert("available!");
  //   navigator.geolocation.getCurrentPosition(function (position, error) {
  //     console.log(position);
  //     setLat(position.coords.latitude);
  //     setLng(position.coords.longitude);
  //     console.log(error);
  //   });
  //   // navigator.geolocation.getCurrentPosition(function (position) {
  //   //   alert(position.coords.latitude);
  //   // });
  // } else {
  //   alert("Sorry Not available!");
  // }

  // function displayLocation(latitude, longitude) {
  //   var request = new XMLHttpRequest();

  //   var method = "GET";
  //   var url =
  //     "http://maps.googleapis.com/maps/api/geocode/json?latlng=" +
  //     latitude +
  //     "," +
  //     longitude +
  //     "&sensor=true";
  //   var async = true;

  //   request.open(method, url, async);
  //   request.onreadystatechange = function () {
  //     if (request.readyState == 4 && request.status == 200) {
  //       var data = JSON.parse(request.responseText);
  //       var address = data.results[0];
  //       document.write(address.formatted_address);
  //     }
  //   };
  //   request.send();
  // }

  // var successCallback = function (position) {
  //   var x = position.coords.latitude;
  //   var y = position.coords.longitude;
  //   displayLocation(x, y);
  // };

  // var errorCallback = function (error) {
  //   var errorMessage = "Unknown error";
  //   switch (error.code) {
  //     case 1:
  //       errorMessage = "Permission denied";
  //       break;
  //     case 2:
  //       errorMessage = "Position unavailable";
  //       break;
  //     case 3:
  //       errorMessage = "Timeout";
  //       break;
  //     default:
  //       break;
  //   }
  //   document.write(errorMessage);
  // };

  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 1000,
  //   maximumAge: 0,
  // };

  // navigator.geolocation.getCurrentPosition(
  //   successCallback,
  //   errorCallback,
  //   options
  // );

  // console.log(banks.length)

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/list" exact>
          {<ListPage pets={pets} banks={banks} setPets={setPets} />}
          {/* {!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
        <Route path="/form" exact>
          {<FormPage pets={pets} banks={banks} setPets={setPets} />}
          {/* {!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
        <Route path="/list/:avatarId">
          {<DetailsPage pets={pets} banks={banks} />}
          {/* {!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
        <Route path="/confirmation">
          {<Confirmation />}
          {/* {!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
        <Route path="/speech">
          {<Speech />}
          {/* {!authCtx.isLoggedIn && <Redirect to="/auth" />} */}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
