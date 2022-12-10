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
import { useState } from "react";

const HeroSection = () => {
  const [name, setName] = useState("Cristian");
  const [location, setLocation] = useState("Bucuresti");
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes["hero-text-box"]}>
          <h1 className={classes["heading-primary"]}>
            {`Cu ce te putem ajuta astazi${name !== "" ? "," : ""}`}{" "}
            {name !== "" ? <p className="name-auth"> {name}?</p> : ""}
          </h1>
          <div className={classes["addr-landing"]}>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 7C13 11.6667 7 15.6667 7 15.6667C7 15.6667 1 11.6667 1 7C1 5.4087 1.63214 3.88258 2.75736 2.75736C3.88258 1.63214 5.4087 1 7 1C8.5913 1 10.1174 1.63214 11.2426 2.75736C12.3679 3.88258 13 5.4087 13 7Z"
                stroke="#A2A0AC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                stroke="#A2A0AC"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {location}
          </div>

          {/* <Link to="/auth" className={classes["btn--full"]}>
            Get Started...
          </Link> */}
          <div className={classes["cards-container"]}>
            <div className={classes["scrolling-wrapper-flexbox"]}>
              <div className={classes["card-bcr"]}>
                <h2>Depunere sau retragere de bani</h2>
                <p>
                  Atentie! Pentru retragerile de numerar de peste 3,000 de euro,
                  te invitam sa ne contactezi telefonic la *2227 (apeluri
                  nationale) sau +4021 407 4200 (apeluri internationale).
                </p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Plata rata credit</h2>
                <p>Plata ratelor pentru toate tipurile de credit</p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Operatiune fara numerar</h2>
                <p>
                  Cont curent, card de debit, tranzactii, George si servicii
                  digitale, administrare cont si card.
                </p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Deschidere cont curent</h2>
                <p>Deschidere cont curent</p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Deschidere cont minori</h2>
                <p>Deschidere cont persoane sub 18 ani.</p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Credit de nevoi personale</h2>
                <p>Inclusiv card credit si descoperit de cont.</p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Investitii - subscriere</h2>
                <p>
                  Fonduri mutuale, Capital Plan, Titluri de stat, Obligatiuni
                  structurate, Aur (lingouri si monede) etc.
                </p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Asigurare</h2>
                <p>Viata, casa, bunuri.</p>
              </div>
              <div className={classes["card-bcr"]}>
                <h2>Pensie privata</h2>
                <p>Pilon 3 de la BCR Pensii.</p>
              </div>
            </div>
          </div>
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
