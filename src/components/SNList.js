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
import SpecialSN from "./SpecialSN";

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
    code: "MFM895",
    name: "BCR POLITEHNICA",
    address: "Splaiul Independentei Nr. 113",
    city: "BUCURESTI",
    county: "BUCURESTI S6",
    euro: "NU",
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
  const [searchInput, setSearchInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    setFilteredArray(
      props.banks.filter(
        (item) =>
          item.address.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.county.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput, props.banks]);

  const changeInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className={classes["sn-list"]}>
      <SpecialSN info={dummyBanks[0]} key={dummyBanks[0].code}></SpecialSN>
      <div className={classes["text-search"]}>
        <h1>Caută altă locație în care dorești să ne vizitezi</h1>
      </div>

      <div className={classes["search-bar-container"]}>
        <input
          className={classes["search-bar"]}
          type="text"
          placeholder="Nume unitate, adresă, zonă"
          onChange={changeInputHandler}
          value={searchInput}
        />

        <svg
          className={classes["svg-search"]}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.71429 0C7.31791 0 9.42857 2.11066 9.42857 4.71429C9.42857 5.86182 9.01856 6.91359 8.33705 7.7311L11.8745 11.2684C12.0418 11.4358 12.0418 11.7071 11.8745 11.8745C11.7257 12.0232 11.4948 12.0398 11.3277 11.9241L11.2684 11.8745L7.7311 8.33705C6.91359 9.01856 5.86182 9.42857 4.71429 9.42857C2.11066 9.42857 0 7.31791 0 4.71429C0 2.11066 2.11066 0 4.71429 0V0ZM4.71429 0.857143C2.58404 0.857143 0.857143 2.58404 0.857143 4.71429C0.857143 6.84453 2.58404 8.57143 4.71429 8.57143C6.84453 8.57143 8.57143 6.84453 8.57143 4.71429C8.57143 2.58404 6.84453 0.857143 4.71429 0.857143Z"
            fill="#A2A0AC"
          />
        </svg>
      </div>
      {filteredArray
        .map((bank) => <SmallNews info={bank} key={bank.code} />)
        .splice(0, 20)}
    </div>
  );
};

export default SNList;
