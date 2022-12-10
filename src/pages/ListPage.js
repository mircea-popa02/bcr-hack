import SmallNews from "../components/SmallNews";
import SNList from "../components/SNList";
import classes from "./ListPage.module.css";

const ListPage = (props) => {
  return (
    <div className={classes.content}>
      <h1>Te asteptam in cea mai apropiata locatie BCR</h1>
      {/* primul card */}
      <h1>Cauta alta locatie in care doresti sa ne vizitezi</h1>
      {/* filtru */}
      <SNList pets={props.pets} banks={props.banks} setPets={props.setPets} />
    </div>
  );
};

export default ListPage;
