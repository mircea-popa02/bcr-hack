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
  console.log(props.pet);

  return (
    <div className={classes["big-news-container"]}>
      <h1 className={classes.animalName}>{props.pet.name}</h1>
      <div className={classes["big-news"]}>
        <div className={classes["big-news-header"]}>
          <div className={classes.firstgroup}>
            <img
              className={classes["big-image"]}
              src={deliverPhoto(props.pet.species)}
              alt="Big News"
            />
            <div className={classes["big-news-text"]}>
              <h2>Race: {props.pet.species}</h2>
              <h2>Size: {props.pet.size}</h2>
              <h2>Age: {props.pet.age} y.o.</h2>
              <h2>Color: {props.pet.color}</h2>
            </div>
          </div>
          <div className={classes.reward}>
            <h1> Reward </h1>
            <h1> 1000$ </h1>
          </div>
        </div>
        <div className={classes["big-news-content"]}>
          <h2>Owner: {props.pet.ownersName}</h2>
          <h2>Phone: {props.pet.ownersPhone}</h2>
          <h2>Pet went missing on: {props.pet.date}</h2>
          <h2>Last seen around:</h2>
        </div>
        <div className={classes["big-news-map"]}>
          <MyMap long={+props.pet.long} lat={+props.pet.lat} />
        </div>
      </div>
    </div>
  );
};

export default BigNews;
