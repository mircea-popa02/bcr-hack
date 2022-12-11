import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "ro-RO";

function SpeechToText(props) {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    props.modify(note)
    setNote("");
  };

  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">
        <div className="box">
          <h2>Current Note</h2>
          {isListening ? <span></span> : <span></span>}
          <button onClick={handleSaveNote} disabled={!note}>
            Save Note
          </button>
          <button onClick={() => setIsListening((prevState) => !prevState)}>
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="box">
          <h2>Notes</h2>
          {savedNotes.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpeechToText;
// import { useEffect, useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

// const SpeechToText = () => {
//   const [text, setText] = useState("");
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();

//   if (!browserSupportsSpeechRecognition) {
//     return <span>Browser doesn't support speech recognition.</span>;
//   }

//   // useEffect(() => {
//   //   SpeechRecognition.startListening({ continuous: true });
//   //   console.log("listening starts");
//   // }, []);

//   // console.log(transcript);

//   // setVoice(transcript);
//   // console.log(voice);

//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };

//   const startListening = async () => {
//     const res = await SpeechRecognition.startListening();
//     setText(res);
//   };
//   return (
//     <div>
//       <p>Microphone: {listening ? "on" : "off"}</p>
//       <button onClick={startListening}>Start</button>
//       <button onClick={SpeechRecognition.stopListening}>Stop</button>
//       <button onClick={resetTranscript}>Reset</button>
//       <p>{text}</p>
//       {/* <form>
//         <textarea
//           value={transcript}
//           onChange={(e) => {
//             setText(e.target.value);
//             // console.log(text);
//           }}
//         ></textarea>
//       </form> */}
//       {/* <p>{text}</p> */}
//     </div>
//   );
// };

// export default SpeechToText;

// // import { useEffect, useState } from "react";
// // import SpeechRecognition, {
// //   useSpeechRecognition,
// // } from "react-speech-recognition";

// // const SpeechToText = () => {
// //   const [voice, setVoice] = useState("");
// //   const {
// //     transcript,
// //     listening,
// //     resetTranscript,
// //     browserSupportsSpeechRecognition,
// //   } = useSpeechRecognition();

// //   // if (!browserSupportsSpeechRecognition) {
// //   //   return <span>Browser doesn't support speech recognition.</span>;
// //   // }

// //   useEffect(() => {
// //     SpeechRecognition.startListening({ continuous: true });
// //     console.log("listening starts");
// //   }, []);
// //
// //   // console.log(transcript);

// //   // setVoice(transcript);
// //   // console.log(voice);

// //   const handleChange = (e) => {
// //     setVoice(e.target.value);
// //     console.log(voice);
// //   };

// //   return (
// //     <div>
// //       <form>
// //         <textarea value={transcript} onChange={handleChange}></textarea>
// //         <button onClick={resetTranscript}>clear</button>
// //         <button
// //           onClick={() => {
// //             SpeechRecognition.stopListening();
// //             console.log("listening stops");
// //           }}
// //         >
// //           {" "}
// //         </button>
// //       </form>
// //     </div>
// //   );

// // return (
// //   <div>
// //     <p>Microphone: {listening ? "on" : "off"}</p>
// //     <button onClick={SpeechRecognition.startListening}>Start</button>
// //     <button onClick={SpeechRecognition.stopListening}>Stop</button>
// //     <button onClick={resetTranscript}>Reset</button>
// //     <p>{transcript}</p>
// //   </div>
// //   // );
// // };

// // export default SpeechToText;
