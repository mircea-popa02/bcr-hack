import { useEffect } from "react";
import { useState } from "react";
import MyMap from "../components/GoogleMap";
import SendEmail from "../components/SendEmail";
import classes from "../pages/Confirmation.module.css";

const Confirmation = () => {
  const [userInfo, setUserInfo] = useState({});
  const [bankInfo, setBank] = useState({});
  const [voice, setVoice] = useState("");

  useEffect(() => {
    const items = localStorage.getItem("myTaskList");
    setUserInfo(items);
    const bank = localStorage.getItem("chosenBank");
    setBank(bank);
    const voice = localStorage.getItem("voice");
    setVoice(voice);
  }, []);

  if (typeof userInfo === "object" && !Array.isArray(userInfo)) {
    console.log("team prins");
  } else {
    console.log(JSON.parse(userInfo).name);
  }

  if (typeof bankInfo === "object" && !Array.isArray(bankInfo)) {
    console.log("team prins2");
  } else {
    console.log(JSON.parse(bankInfo).name);
  }

  return (
    <>
      {!voice ? (
        <>
          <div className={classes.confirmation}>
            <h1>
              Salut,{" "}
              {!(typeof userInfo === "object" && !Array.isArray(userInfo))
                ? JSON.parse(userInfo).name
                : null}
            </h1>
            <p>
              {" "}
              Programarea ta la{" "}
              <strong>
                {!(typeof bankInfo === "object" && !Array.isArray(bankInfo))
                  ? JSON.parse(bankInfo).name
                  : null}
              </strong>{" "}
              este confirmată.
            </p>

            <p>Scopul vizitei: depunere sau retragere de bani.</p>
            <p>
              Locația BCR aleasă:{" "}
              <strong>
                {!(typeof bankInfo === "object" && !Array.isArray(bankInfo))
                  ? JSON.parse(bankInfo).address
                  : null}
              </strong>
              <div className={classes.map}>
                <MyMap latitude={44.442586} longitude={26.0513144} />
              </div>
            </p>

            <p>
              Vei primi un e-mail automat la adresa{" "}
              <strong>
                {!(typeof userInfo === "object" && !Array.isArray(userInfo))
                  ? JSON.parse(userInfo).ownersEmail
                  : null}
              </strong>{" "}
              cu mai multe detalii după confirmare.
            </p>

            <p>
              Vă așteptăm pe data{" "}
              <strong>
                {!(typeof userInfo === "object" && !Array.isArray(userInfo))
                  ? JSON.parse(userInfo).date
                  : null}
              </strong>
            </p>
          </div>

          <div className={classes.confirm}>
            <SendEmail
              name={
                !(typeof bankInfo === "object" && !Array.isArray(bankInfo))
                  ? JSON.parse(bankInfo).name
                  : null
              }
              address={
                !(typeof bankInfo === "object" && !Array.isArray(bankInfo))
                  ? JSON.parse(bankInfo).address
                  : null
              }
              date={
                !(typeof userInfo === "object" && !Array.isArray(userInfo))
                  ? JSON.parse(userInfo).date
                  : null
              }
              email={
                !(typeof userInfo === "object" && !Array.isArray(userInfo))
                  ? JSON.parse(userInfo).ownersEmail
                  : null
              }
            />
          </div>
        </>
      ) : (
        <SendEmail name={voice.split(" ")[2]} />
      )}
    </>
  );
};
export default Confirmation;
