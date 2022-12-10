import useInput from "../hooks/use-input";
import "./BasicForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isCNP = (value) => value.length === 13;

const BasicForm = (props) => {
  let myTasks = JSON.parse(localStorage.getItem("myTaskList")) || [];
  // props.pets and props.onPetChange

  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty);
  const {
    value: prenumeValue,
    isValid: prenumeIsValid,
    hasError: prenumeHasError,
    valueChangeHandler: prenumeChangeHandler,
    inputBlurHandler: prenumeBlurHandler,
    reset: resetPrenume,
  } = useInput(isNotEmpty);
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: cnpValue,
    isValid: cnpIsValid,
    hasError: cnpHasError,
    valueChangeHandler: cnpChangeHandler,
    inputBlurHandler: cnpBlurHandler,
    reset: resetCnp,
  } = useInput(isNotEmpty);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (
    nameIsValid &&
    prenumeIsValid &&
    dateIsValid &&
    cnpIsValid &&
    phoneIsValid &&
    emailIsValid
  ) {
    formIsValid = true;
  }

  const submitPetHandler = (event) => {
    const smth = fetch(
      "https://paws-b59ae-default-rtdb.europe-west1.firebasedatabase.app/pets.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          prenume: prenumeValue,
          date: dateValue,
          cnp: cnpValue,
          ownersPhone: phoneValue,
          ownersEmail: emailValue,
        }),
      }
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const newPet = {
      name: nameValue,
      prenume: prenumeValue,
      date: dateValue,
      cnp: cnpValue,
      ownersPhone: phoneValue,
      ownersEmail: emailValue,
    };
    myTasks.push(newPet);
    localStorage.setItem("myTaskList", JSON.stringify(myTasks));
    props.onPetChange((prevPets) => {
      return prevPets.concat(newPet);
    });

    submitPetHandler();

    // console.log("Submitted!");
    // console.log(nameValue, speciesValue, dateValue);

    resetName();
    resetPrenume();
    resetDate();
    resetCnp();
    resetPhone();
    resetEmail();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const prenumeClasses = prenumeHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";
  const cnpClasses = cnpHasError ? "form-control invalid" : "form-control";

  const phoneClasses = phoneHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="inputs-and-button">
        <div className="control-group">
          <div className={nameClasses}>
            <label htmlFor="name">Prenume</label>
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className="error-text">Te rog introdu prenumele.</p>
            )}
          </div>
          <div className={prenumeClasses}>
            <label htmlFor="prenume">Nume</label>
            <input
              type="text"
              id="prenume"
              value={prenumeValue}
              onChange={prenumeChangeHandler}
              onBlur={prenumeBlurHandler}
            />
            {nameHasError && (
              <p className="error-text">Te rog introdu numele.</p>
            )}
          </div>

          <div className={dateClasses}>
            <label htmlFor="date">Data</label>
            <input
              type="text"
              id="date"
              value={dateValue}
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
            />
            {dateHasError && <p className="error-text">Te rog introdu data.</p>}
          </div>
          <div className={cnpClasses}>
            <label htmlFor="cnp">CNP</label>
            <input
              type="text"
              id="cnp"
              value={cnpValue}
              onChange={cnpChangeHandler}
              onBlur={cnpBlurHandler}
            />
            {cnpHasError && <p className="error-text">Te rog introdu CNP.</p>}
          </div>

          <div className={phoneClasses}>
            <label htmlFor="ownersPhone">Telefon</label>
            <input
              type="text"
              id="ownersPhone"
              value={phoneValue}
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
            />
            {phoneHasError && (
              <p className="error-text">Te rog introdu nr de telefon.</p>
            )}
          </div>
          <div className={emailClasses}>
            <label htmlFor="ownersEmail">Email</label>
            <input
              type="text"
              id="ownersEmail"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Te rog introdu emailul.</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button className="form-btn" disabled={!formIsValid}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
