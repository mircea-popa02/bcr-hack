import classes from "./HeroSection.module.css";
import customer1 from "../images/customers/customer-1.jpg";
import customer2 from "../images/customers/customer-2.jpg";
import customer3 from "../images/customers/customer-3.jpg";
import customer4 from "../images/customers/customer-4.jpg";
import customer5 from "../images/customers/customer-5.jpg";
import customer6 from "../images/customers/customer-6.jpg";
import cyberDog from "../images/final.png";
import { Link } from "react-router-dom";
import thumbtack from "../images/thumbtack.png";
import missing from "../images/missing.png";

const HeroSection = () => {
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes["hero-text-box"]}>
          <h1 className={classes["heading-primary"]}>
            The perfect place for owners to find their lost pet
          </h1>
          <p className={classes["hero-description"]}>
            This incentivised 24/7 online service provides you essential
            assistance for finding your buddy. Peers are one click away from
            beginning the search
          </p>
          <Link to="/auth" className={classes["btn--full"]}>
            Get Started...
          </Link>

          <div className={classes["delivered-meals"]}>
            <div className={classes["delivered-imgs"]}>
              <img src={customer1} alt="Customer photo" />
              <img src={customer2} alt="Customer photo" />
              <img src={customer3} alt="Customer photo" />
              <img src={customer4} alt="Customer photo" />
              <img src={customer5} alt="Customer photo" />
              <img src={customer6} alt="Customer photo" />
            </div>
            <p className={classes["delivered-text"]}>
              <span className={classes["number-text"]}>2.350+</span>
              customers found their pet
            </p>
          </div>
        </div>
        <div className={classes["hero-img-box"]}>
          <img className={classes["hero-img"]} src={cyberDog} />
          {/* <img className={classes["missing"]} src={missing} /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import "./HeroSection.css";
// import customer1 from "../images/customers/customer-1.jpg";
// import customer2 from "../images/customers/customer-2.jpg";
// import customer3 from "../images/customers/customer-3.jpg";
// import customer4 from "../images/customers/customer-4.jpg";
// import customer5 from "../images/customers/customer-5.jpg";
// import customer6 from "../images/customers/customer-6.jpg";
// import cyberDog from "../images/final.png";

// const HeroSection = () => {
//   return (
//     <section className="section-hero">
//       <div className="hero">
//         <div className="hero-text-box">
//           <h1 className="heading-primary">
//             The perfect place for owners to find their lost pet
//           </h1>
//           <p className="hero-description">
//             This incentivised 24/7 online service provides you essential
//             assistance for finding your buddy. Peers are one click away from
//             beginning the search
//           </p>
//           {/* <a href="#" className="btn btn--full margin-right-sm">
//             Start eating well
//           </a>
//           <a href="#" className="btn btn--outline">
//             Learn more &darr;
//           </a> */}
//           <div className="delivered-meals">
//             <div className="delivered-imgs">
//               <img src={customer1} alt="Customer photo" />
//               <img src={customer2} alt="Customer photo" />
//               <img src={customer3} alt="Customer photo" />
//               <img src={customer4} alt="Customer photo" />
//               <img src={customer5} alt="Customer photo" />
//               <img src={customer6} alt="Customer photo" />
//             </div>
//             <p className="delivered-text">
//               <span className="number-text">2.350+</span>
//               customers found their pet
//             </p>
//           </div>
//         </div>
//         <div className="hero-img-box">
//           <img className="hero-img" src={cyberDog} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
