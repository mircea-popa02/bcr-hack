import { useEffect } from "react";
import { useState } from "react";

const Confirmation = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const items = localStorage.getItem("myTaskList");
    setUserInfo(items);
  }, []);

  if (typeof userInfo === "object" && !Array.isArray(userInfo)) {
    console.log("team prins");
  } else {
    console.log(JSON.parse(userInfo)["0"].name);
  }

  console.log(userInfo);
  //   console.log(userInfo[0].ownersEmail);
  //   let response = JSON.parse(userInfo["0"]);
  //   console.log(response.name);

  return (
    <div className="confirmation">
      <h1>Thank you for signing up!</h1>
      <p>
        You will receive an email shortly at{" "}
        <strong>
          {!(typeof userInfo === "object" && !Array.isArray(userInfo))
            ? JSON.parse(userInfo)["0"].ownersEmail
            : null}
        </strong>{" "}
        with a link to confirm your email address.
      </p>
    </div>
  );
};
export default Confirmation;
