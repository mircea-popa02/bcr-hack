import SpeechToText from "../components/SpeechToText";
import React, { useState } from "react";
// import { Container, Segment } from "semantic-ui-react";
import { useSpeechSynthesis } from "react-speech-kit";

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

  return (
    <>
      <h1>Text to Speech Converter in React</h1>
      <textarea
        className="textAreaStyle"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <button
        className="buttonStyle"
        onClick={() => {
          handleOnClick();
        }}
      >
        Listen
      </button>
      <SpeechToText modify={onvoiceChange} />
      <p>{voice.split(" ")[2]}</p>
    </>
  );
}

export default Speech;
