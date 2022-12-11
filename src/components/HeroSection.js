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
import { useEffect, useState } from "react";
import Geocode from "react-geocode";

const HeroSection = (props) => {
  // console.log("baaaaaaaaaai");
  // console.log(props.loc)
  // const [name, setName] = useState("Cristian");
  const [location, setLocation] = useState("Bucuresti");
  const [dark, setDark] = useState(false);

  const [myLoc, setMyLoc] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  console.log("1");

  const ceva = window.localStorage.getItem("location") || "uunknown locationn";

  useEffect(() => {
    const fetchUserLocation = async () => {
      Geocode.setApiKey("AIzaSyDtMSRiyaavuMQA_DFwYglfSGCDKSd6zbc");
      Geocode.setLocationType("ROOFTOP");

      const response = await Geocode.fromLatLng(x, y);
      // if(!response){
      //   alert("smth wrong");
      // }
      const responseData = response.results[0].formatted_address;
      // await setTimer(() => {}, 2000);
      console.log("hero");
      setMyLoc(responseData);
      // console.log(responseData);
    };
    navigator.geolocation.getCurrentPosition(function (position, error) {
      setX(position.coords.latitude);
      setY(position.coords.longitude);
      fetchUserLocation();
    });
  }, [myLoc]);

  if (myLoc !== "")
    window.localStorage.setItem("location", JSON.stringify(myLoc));

  window.localStorage.setItem("location", "SSplaiul Independenței 313B, București, Romaniaa")

  return (
    <div className={dark ? classes["section-hero-dark"] : classes["section-hero"]}>
      <div className={dark ? classes["hero-dark"] : classes.hero}>
        <div className={dark ? classes["hero-text-box-dark"] : classes["hero-text-box"]}>
        <Link to={`/speech`} className={dark ? classes["mic-dark"] : classes["mic"]}>
            <ion-icon name="mic-outline"></ion-icon>
          </Link>
          <div className={dark ? classes["small-container-dark"] : classes["small-container"]}>
          
            <h1 className={dark ? classes["heading-primary-dark"] : classes["heading-primary"]}>
              Cu ce te putem ajuta astăzi?
            </h1>
          </div>

          <div className={dark ? classes["addr-landing-dark"] : classes["addr-landing"]}>
            <svg onClick={() => setDark(!dark)}
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
            {ceva.substring(1, ceva.length - 1)}
          </div>

          <div className={dark ? classes["cards-container-dark"] : classes["cards-container"]}>
            <div className={dark ? classes["scrolling-wrapper-flexbox-dark"] : classes["scrolling-wrapper-flexbox"]}>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Depunere sau retragere de bani</h2>
                <p>
                  Atentie! Pentru retragerile de numerar de peste 3,000 de euro,
                  te invitam sa ne contactezi telefonic la *2227 (apeluri
                  nationale) sau +4021 407 4200 (apeluri internationale).
                </p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Plata rata credit</h2>
                <p>Plata ratelor pentru toate tipurile de credit</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Operatiune fara numerar</h2>
                <p>
                  Cont curent, card de debit, tranzactii, George si servicii
                  digitale, administrare cont si card.
                </p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Deschidere cont curent</h2>
                <p>Deschidere cont curent</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Deschidere cont minori</h2>
                <p>Deschidere cont persoane sub 18 ani.</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Credit de nevoi personale</h2>
                <p>Inclusiv card credit si descoperit de cont.</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Investitii - subscriere</h2>
                <p>
                  Fonduri mutuale, Capital Plan, Titluri de stat, Obligatiuni
                  structurate, Aur (lingouri si monede) etc.
                </p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Asigurare</h2>
                <p>Viata, casa, bunuri.</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
              <div className={dark ? classes["card-bcr-dark"] : classes["card-bcr"]}>
                <h2>Pensie privata</h2>
                <p>Pilon 3 de la BCR Pensii.</p>
                <Link to={`/list`} className={dark ? classes["btn--news-dark"] : classes["btn--news"]}>
                  <div>Continua</div>
                </Link>
              </div>
            </div>
          </div>

          <div className={dark ? classes["footer-dark"] : classes["footer"]}>
            <div className={dark ? classes["instagram-dark"] : classes ["instagram"]}>
              Instagram
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5C11.0717 8.5 10.1815 8.86875 9.52513 9.52513C8.86875 10.1815 8.5 11.0717 8.5 12C8.5 12.9283 8.86875 13.8185 9.52513 14.4749C10.1815 15.1313 11.0717 15.5 12 15.5V15.5Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.636 7H17.648"
                  stroke="#21416C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={dark ? classes["facebook-dark"] : classes["facebook"]}>
              Facebook
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3V9.3Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={dark ? classes["youtube-dark"] : classes["youtube"]}>
              YouTube
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4 9.50006L13.9 11.0001C14.8 11.6001 14.8 12.5001 13.9 13.1001L11.4 14.6001C10.4 15.2001 9.59998 14.7001 9.59998 13.6001V10.6001C9.59998 9.30006 10.4 8.90006 11.4 9.50006Z"
                  stroke="#21416C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
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
