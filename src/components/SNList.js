import SmallNews from "./SmallNews";
import classes from "./SNList.module.css";
import BasicForm from "./BasicForm";
import { useEffect, useState } from "react";
import budgie from "../images/animals/budgie.jpg";
import bunny from "../images/animals/bunny.jpg";
import cat from "../images/animals/cat.png";
import hamster from "../images/animals/hamster.jpg";
import labrador from "../images/animals/labrador.jpg";
import lizard from "../images/animals/lizard.jpg";
import pug from "../images/animals/pug.jpg";

const DUMMY_PETS = [
  {
    id: "p1",
    name: "Anakin",
    species: "Labrador",
    date: "12.09.2022",
    place: "Braila",
    age: 2,
    ownersName: "John Doe",
    ownersPhone: "0722 222 222",
    ownersEmail: "johndoe@gmail.com",
  },
  {
    id: "p2",
    name: "Rex",
    species: "Bulldog",
    date: "10.03.2020",
    place: "Bucuresti",
    age: 1,
    ownersName: "Jane Doe",
    ownersPhone: "0722 555 555",
    ownersEmail: "jd@gmail.com",
  },
];

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

const dummyBanks = [
  {
    code: "ATM0001",
    name: "BCR CARAS SEVER",
    address: "STR.I.L.CARAGIALE NR.10",
    city: "RESITA",
    county: "CARAS SEVERIN",
    euro: "DA",
    contactless: "NU",
  },
  {
    code: "ATM0002",
    name: "BCR GORJULUI 2",
    address: "BD.IULIU MANIU NR.64",
    city: "BUCURESTI",
    county: "BUCURESTI S6",
    euro: "DA",
    contactless: "NU",
  },
];

const SNList = (props) => {
  // const [showForm, setShowForm] = useState(false);

  // const showFormHandler = () => {
  //   setShowForm((prev) => !prev);
  // };
  const [searchInput, setSearchInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    setFilteredArray(
      dummyBanks.filter(
        (item) =>
          item.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.county.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  const changeInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  console.log(searchInput);

  return (
    <div className={classes["sn-list"]}>
      <div className={classes.frame}>
        <input
          type="text"
          placeholder="Search..."
          onChange={changeInputHandler}
          value={searchInput}
        />

        {/* {filteredArray.map((name) => {
          return <p>{name}</p>;
        })} */}
      </div>

      {filteredArray.map((bank) => (
        <SmallNews info={bank} key={bank.code} />
      ))}
      {/* {props.pets.map((pet) => (
        <SmallNews info={pet} key={pet.id} photo={deliverPhoto(pet.species)} />
      ))} */}

      {/* <button onClick={showFormHandler} className={classes["show-hide"]}>
        {!showForm ? "Lost your pet? Show form..." : "Hide form"}
      </button> */}

      {/* {showForm && <BasicForm pets={props.pets} onPetChange={props.setPets} />} */}

      {/* <SmallNews />
      <SmallNews />
      <SmallNews />
      <SmallNews /> */}
    </div>
  );
};

export default SNList;
