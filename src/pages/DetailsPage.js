import BigNews from "../components/BigNews";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
const DetailsPage = (props) => {
  const params = useParams();

  // console.log(props.pets);

  const bank = props.banks.filter((bank) => bank.name === params.avatarId);
  // console.log(bank[0]);
  // const pet = props.pets.filter((pet) => pet.id === params.avatarId);
  // console.log("PEEEEEEEEEEEEEEEEEEETTTTTTTTTSSSSSS");
  // console.log(pet[0]);

  return (
    <div>
      
      <BigNews bank={bank[0]} />
    </div>
  );
};

export default DetailsPage;
