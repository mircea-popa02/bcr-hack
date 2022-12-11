import SpeechToText from "../components/SpeechToText";
import React, { useState } from "react";
// import { Container, Segment } from "semantic-ui-react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Link } from "react-router-dom";
import classes from "./Speech.module.css";

function Speech() {
  const [voice, setVoice] = useState("");
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();

  const onvoiceChange = (arg) => {
    setVoice(arg);
  };

  const handleOnClick = () => {
    speak({ text: text });
  };

  if (voice.split("").length > 20) {
    localStorage.setItem("voice", voice);
  }

  return (
  <div className={classes.wrapper}>
      <h1>Text to Speech Converter in React</h1>
      <textarea
        className={classes.altceva}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <button
        className={classes.ceva}
        onClick={() => {
          handleOnClick();
        }}
      >
        Listen
      </button>
      <SpeechToText modify={onvoiceChange} />
      <p>{voice.split(" ")[2]}</p>
      <p>{voice.split(" ")[9]}</p>
      <p>{voice.split(" ")[12]}</p>
      <p>{voice.split(" ")[17]}</p>
      <p>{voice.split(" ")[18]}</p>
      <p>{voice.split(" ")[19]}</p>
      <Link className={classes.button} to={`/confirmation`}>
        <span >Confirma</span>
      </Link>
    </div>
  );
}

export default Speech;
