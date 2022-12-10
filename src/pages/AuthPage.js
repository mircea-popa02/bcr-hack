import AuthForm from "../components/AuthForm";
import { useState, useEffect } from "react";
import { storage } from "../store/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";

const AuthPage = () => {
  return <AuthForm />;

  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);

  // const imagesListRef = ref(storage, "images/");
  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/` + imageUpload.name);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrls((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     console.log(response.items[0]._location.path_);
  //     const certain = response.items.filter((item) => {
  //       if (item._location.path_.includes("budgie")) {
  //         return item;
  //       }
  //     });

  //     console.log(certain);
  //     certain.forEach((item) => {
  //       return getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //         console.log(url);
  //       });
  //     });
  //   });
  // }, []);

  // return (
  //   <div className="App">
  //     <input
  //       type="file"
  //       onChange={(event) => {
  //         setImageUpload(event.target.files[0]);
  //       }}
  //     />
  //     <button onClick={uploadFile}> Upload Image</button>
  //     {imageUrls.map((url) => {
  //       return <img src={url} />;
  //     })}
  //   </div>
  // );
};

export default AuthPage;
