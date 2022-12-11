import photo from "../images/Capture.PNG";
import classes from "./SpecialSN.module.css";
import { Link } from "react-router-dom";

const SmallNews = (props) => {
  // console.log(props.info.id);
  const onClickHandler = () => {
    localStorage.setItem("chosenBank", JSON.stringify(props.info));
  };

  return (
    <div className={classes["special-container"]}>
      <div className={classes.special}>
        {/* <img src={props.photo} alt="news" className={classes.doggo} /> */}
        <div className={classes.specialTextbox}>
          <p className={classes["special-name"]}>

            {props.info.name}
            <div className={classes["distance-bank"]}>
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 7C13 11.6667 7 15.6667 7 15.6667C7 15.6667 1 11.6667 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7Z" stroke="#21416C" stroke-opacity="0.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#21416C" stroke-opacity="0.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              200m</div>
          </p>

          <p className={classes["address-name-special"]}>
            {props.info.address} {props.info.city}{" "}
            {props.info.county}
          </p>
        </div>
        <div className={classes["buttons"]}>
          <Link to={`/list/${props.info.name}`} className={classes["btn--news"]}>
            <span>Detalii</span>
          </Link>

          <Link to={`/form`} className={classes["btn--news2"]}>
            <span onClick={onClickHandler}>Selectează</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SmallNews;
