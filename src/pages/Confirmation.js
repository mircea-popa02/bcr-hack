import { useEffect } from "react";
import { useState } from "react";

const Confirmation = () => {
  const [userInfo, setUserInfo] = useState({});
  const [bankInfo, setBank] = useState({})
  useEffect(() => {
    const items = localStorage.getItem("myTaskList");
    setUserInfo(items);
    const bank = localStorage.getItem("chosenBank")
    setBank(bank)
  }, []);

  //   console.log(userInfo);

  if (typeof userInfo === "object" && !Array.isArray(userInfo)) {
    console.log("team prins");
  } else {
    console.log(JSON.parse(userInfo).name);
  }

  console.log(JSON.parse(bankInfo).name)

  //   console.log(userInfo);
  //   console.log(userInfo[0].ownersEmail);
  //   let response = JSON.parse(userInfo["0"]);
  //   console.log(response.name);

  return (
    <div className="confirmation">
      <h1>Salut, Cristian</h1>
      <p> Programarea ta la {" "}
        <strong>{JSON.parse(bankInfo).name}</strong>{" "}
        este confirmata.

      </p>

      <p>scopul vizitei: depunere sau retragere de bani</p>
      <p>locatie:{" "} <strong>{JSON.parse(bankInfo).address}{", "}{JSON.parse(bankInfo).city}</strong></p>

      <p>
        Vei primi un e-mail automat cu detalii ce vor aparea in calendarul tau la adresa{" "}
        <strong>
          {!(typeof userInfo === "object" && !Array.isArray(userInfo))
            ? JSON.parse(userInfo).ownersEmail
            : null}
        </strong>{" "}
      </p>

      <p>va asteptam la data {" "} <strong>{!(typeof userInfo === "object" && !Array.isArray(userInfo))
            ? JSON.parse(userInfo).date
            : null}</strong></p>
    </div >
  );
};
export default Confirmation;
