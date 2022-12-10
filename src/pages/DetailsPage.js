import BigNews from "../components/BigNews";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = (props) => {
  const params = useParams();

  console.log(props.pets);

  const pet = props.pets.filter((pet) => pet.id === params.avatarId);
  console.log("PEEEEEEEEEEEEEEEEEEETTTTTTTTTSSSSSS");
  console.log(pet[0]);

  return (
    <div>
      <h1>The Details Page</h1>
      <BigNews pet={pet[0]} />
    </div>
  );
};

export default DetailsPage;
