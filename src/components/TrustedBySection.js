import classes from "./TrustedBySection.module.css";
import google from "../images/google.png";
import nyt from "../images/nyt.png";
import forbes from "../images/forbes.png";
import deloitte from "../images/deloitte.png";
import adobe from "../images/adobe.png";

const TrustedBySection = () => {
  return (
    <section className={classes.trustedby}>
      <h2 className={classes["trustedby-title"]}>Trusted by</h2>

      {/* <div className={classes["trustedby-container"]}> */}
      <div className={classes["trustedby-logos"]}>
        <img src={adobe} alt="adobe" />
        <img src={deloitte} alt="deloitte" />
        <img src={nyt} alt="nyt" />
        <img src={forbes} alt="forbes" />
        <img src={google} alt="protv" />
      </div>
      {/* </div> */}
    </section>
  );
};

export default TrustedBySection;
