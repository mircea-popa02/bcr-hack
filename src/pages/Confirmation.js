import { useEffect } from "react";
import { useState } from "react";
import MyMap from "../components/GoogleMap";
import SendEmail from "../components/SendEmail";

const Confirmation = () => {
  const [userInfo, setUserInfo] = useState({});
  const [bankInfo, setBank] = useState({});

  useEffect(() => {
    const items = localStorage.getItem("myTaskList");
    setUserInfo(items);
    const bank = localStorage.getItem("chosenBank");
    setBank(bank);
  }, []);

  //   console.log(userInfo);

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
  // window.location.reload(false);

  // console.log(JSON.parse(bankInfo))
  //   console.log(userInfo);
  //   console.log(userInfo[0].ownersEmail);
  //   let response = JSON.parse(userInfo["0"]);
  //   console.log(response.name);
  return (
    <>
      <div className="confirmation">
        <h1>Salut, Cristian</h1>
        <p>
          {" "}
          Programarea ta la{" "}
          <strong>
            {!(typeof bankInfo === "object" && !Array.isArray(bankInfo))
              ? JSON.parse(bankInfo).name
              : null}
          </strong>{" "}
          este confirmata.
        </p>

        <p>scopul vizitei: depunere sau retragere de bani</p>
        <p>
          locatie:{" "}
          <strong>
            {!(typeof bankInfo === "object" && !Array.isArray(bankInfo))
              ? JSON.parse(bankInfo).address
              : null}
          </strong>
        </p>

        <p>
          Vei primi un e-mail automat cu detalii ce vor aparea in calendarul tau
          la adresa{" "}
          <strong>
            {!(typeof userInfo === "object" && !Array.isArray(userInfo))
              ? JSON.parse(userInfo).ownersEmail
              : null}
          </strong>{" "}
        </p>

        <p>
          va asteptam la data{" "}
          <strong>
            {!(typeof userInfo === "object" && !Array.isArray(userInfo))
              ? JSON.parse(userInfo).date
              : null}
          </strong>
        </p>
      </div>
      <MyMap latitude={44.442586} longitude={26.0513144} />

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
    </>
  );
};
export default Confirmation;
