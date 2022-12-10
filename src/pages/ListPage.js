import SmallNews from "../components/SmallNews";
import SNList from "../components/SNList";
import classes from "./ListPage.module.css";

const ListPage = (props) => {
  return (
    <div className={classes.content}>
      <h1>The List Page</h1>
      <SNList pets={props.pets} setPets={props.setPets} />
    </div>
  );
};

export default ListPage;
