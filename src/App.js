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
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

function App() {
  const authCtx = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

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
          {authCtx.isLoggedIn && <ListPage pets={pets} setPets={setPets} />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/list/:avatarId">
          {authCtx.isLoggedIn && <DetailsPage pets={pets} />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
