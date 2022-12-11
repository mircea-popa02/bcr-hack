import photo from "../images/Capture.PNG";
import classes from "./SmallNews.module.css";
import { Link } from "react-router-dom";

const SmallNews = (props) => {
  // console.log(props.info.id);

  const onClickHandler = () => {
    localStorage.setItem("chosenBank", JSON.stringify(props.info));
  };

  return (
    <div className={classes["news-container"]}>
      <div className={classes.news}>
        {/* <img src={props.photo} alt="news" className={classes.doggo} /> */}
        <div className={classes.textbox}>
          <p className={classes["news-name"]}>
            {props.info.name}
            
          </p>

          <p className={classes["address-name"]}>
            {props.info.address} {props.info.city} {props.info.county}
          </p>

          {/* <p className={classes["address-info"]}>
            {props.info.euro} {props.info.contactless}
          </p> */}

          {/* <p className={classes["date-place"]}>
            Lost on {props.info.date} in {props.info.place}
          </p> */}
          {/* <p>Disponibil incepand cu 15:30 astazi</p>
          <p>self-service 24/7</p> */}
        </div>

        <div className={classes["buttons"]}>
          <Link
            to={`/list/${props.info.name}`}
            className={classes["btn--news"]}
          >
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
