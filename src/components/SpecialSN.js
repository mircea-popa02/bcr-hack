import photo from "../images/Capture.PNG";
import classes from "./SpecialSN.module.css";
import { Link } from "react-router-dom";

const SmallNews = (props) => {
  // console.log(props.info.id);

  return (
    <div className={classes["special-container"]}>
      <div className={classes.special}>
        {/* <img src={props.photo} alt="news" className={classes.doggo} /> */}
        <div className={classes.specialTextbox}>
          <p className={classes["special-name"]}>
            {props.info.name} {props.info.address} {props.info.city}{" "}
            {props.info.county} {props.info.euro} {props.info.contactless}
          </p>
          <div>marker distanta</div>
          {/* <p className={classes["date-place"]}>
            Lost on {props.info.date} in {props.info.place}
          </p> */}
          <p>Disponibil incepand cu 15:30 astazi</p>
          <p>self-service 24/7</p>
        </div>
        <Link to={`/list/${props.info.name}`} className={classes["btn--news"]}>
          <span>Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default SmallNews;
