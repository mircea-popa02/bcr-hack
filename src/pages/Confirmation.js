import { useEffect } from "react";
import { useState } from "react";

const Confirmation = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("myTaskList"));
    setUserInfo(items);
  }, []);
  console.log(userInfo[0].ownersEmail);
  //   let response = JSON.parse(userInfo);
  //   console.log(response.name);

  return (
    <div className="confirmation">
      <h1>Thank you for signing up!</h1>
      <p>
        You will receive an email shortly at{" "}
        <strong>{userInfo[0].ownersEmail}</strong> with a link to confirm your
        email address.
      </p>
    </div>
  );
};
export default Confirmation;
