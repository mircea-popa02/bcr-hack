import useInput from "../hooks/use-input";
import "./BasicForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const isdate = (value) => value.includes("@");

const BasicForm = (props) => {
  // props.pets and props.onPetChange

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: speciesValue,
    isValid: speciesIsValid,
    hasError: speciesHasError,
    valueChangeHandler: speciesChangeHandler,
    inputBlurHandler: speciesBlurHandler,
    reset: resetSpecies,
  } = useInput(isNotEmpty);
  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty);
  const {
    value: placeValue,
    isValid: placeIsValid,
    hasError: placeHasError,
    valueChangeHandler: placeChangeHandler,
    inputBlurHandler: placeBlurHandler,
    reset: resetPlace,
  } = useInput(isNotEmpty);
  const {
    value: latValue,
    isValid: latIsValid,
    hasError: latHasError,
    valueChangeHandler: latChangeHandler,
    inputBlurHandler: latBlurHandler,
    reset: resetLat,
  } = useInput(isNotEmpty);
  const {
    value: longValue,
    isValid: longIsValid,
    hasError: longHasError,
    valueChangeHandler: longChangeHandler,
    inputBlurHandler: longBlurHandler,
    reset: resetLong,
  } = useInput(isNotEmpty);
  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);
  const {
    value: ownersNameValue,
    isValid: ownersNameIsValid,
    hasError: ownersNameHasError,
    valueChangeHandler: ownersNameChangeHandler,
    inputBlurHandler: ownersNameBlurHandler,
    reset: resetOwnersName,
  } = useInput(isNotEmpty);
  const {
    value: ownersPhoneValue,
    isValid: ownersPhoneIsValid,
    hasError: ownersPhoneHasError,
    valueChangeHandler: ownersPhoneChangeHandler,
    inputBlurHandler: ownersPhoneBlurHandler,
    reset: resetOwnersPhone,
  } = useInput(isNotEmpty);
  const {
    value: ownersEmailValue,
    isValid: ownersEmailIsValid,
    hasError: ownersEmailHasError,
    valueChangeHandler: ownersEmailChangeHandler,
    inputBlurHandler: ownersEmailBlurHandler,
    reset: resetOwnersEmail,
  } = useInput(isdate);

  let formIsValid = false;

  if (
    nameIsValid &&
    speciesIsValid &&
    dateIsValid &&
    placeIsValid &&
    latIsValid &&
    longIsValid &&
    ageIsValid &&
    ownersNameIsValid &&
    ownersPhoneIsValid &&
    ownersEmailIsValid
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
          species: speciesValue,
          date: dateValue,
          place: placeValue,
          lat: latValue,
          long: longValue,
          age: ageValue,
          ownersName: ownersNameValue,
          ownersPhone: ownersPhoneValue,
          ownersEmail: ownersEmailValue,
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
      species: speciesValue,
      date: dateValue,
      place: placeValue,
      lat: latValue,
      long: longValue,
      age: ageValue,
      ownersName: ownersNameValue,
      ownersPhone: ownersPhoneValue,
      ownersEmail: ownersEmailValue,
    };
    props.onPetChange((prevPets) => {
      return prevPets.concat(newPet);
    });

    submitPetHandler();

    console.log("Submitted!");
    console.log(nameValue, speciesValue, dateValue);

    resetName();
    resetSpecies();
    resetDate();
    resetPlace();
    resetLat();
    resetLong();
    resetAge();
    resetOwnersName();
    resetOwnersPhone();
    resetOwnersEmail();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const speciesClasses = speciesHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";
  const placeClasses = placeHasError ? "form-control invalid" : "form-control";
  const latClasses = latHasError ? "form-control invalid" : "form-control";
  const longClasses = longHasError ? "form-control invalid" : "form-control";
  const ageClasses = ageHasError ? "form-control invalid" : "form-control";
  const ownersNameClasses = ownersNameHasError
    ? "form-control invalid"
    : "form-control";
  const ownersPhoneClasses = ownersPhoneHasError
    ? "form-control invalid"
    : "form-control";
  const ownersEmailClasses = ownersEmailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="inputs-and-button">
        <div className="control-group">
          <div className={nameClasses}>
            <label htmlFor="name">Pet's Name</label>
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className="error-text">Please enter a valid name.</p>
            )}
          </div>
          <div className={speciesClasses}>
            <label htmlFor="species1">Species</label>
            <input
              type="text"
              id="species1"
              value={speciesValue}
              onChange={speciesChangeHandler}
              onBlur={speciesBlurHandler}
            />
            {speciesHasError && (
              <p className="error-text">Please enter a valid species.</p>
            )}
          </div>

          <div className={dateClasses}>
            <label htmlFor="date">Missing date</label>
            <input
              type="text"
              id="date"
              value={dateValue}
              onChange={dateChangeHandler}
              onBlur={dateBlurHandler}
            />
            {dateHasError && (
              <p className="error-text">Please enter a valid date</p>
            )}
          </div>
          <div className={placeClasses}>
            <label htmlFor="date">Missing place</label>
            <input
              type="text"
              id="place"
              value={placeValue}
              onChange={placeChangeHandler}
              onBlur={placeBlurHandler}
            />
            {placeHasError && (
              <p className="error-text">Please enter a valid place</p>
            )}
          </div>
          <div className={latClasses}>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              value={latValue}
              onChange={latChangeHandler}
              onBlur={latBlurHandler}
            />
            {latHasError && (
              <p className="error-text">Please enter a valid date latitude.</p>
            )}
          </div>
          <div className={longClasses}>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              value={longValue}
              onChange={longChangeHandler}
              onBlur={longBlurHandler}
            />
            {longHasError && (
              <p className="error-text">Please enter a valid date longitude.</p>
            )}
          </div>
          <div className={ageClasses}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={ageValue}
              onChange={ageChangeHandler}
              onBlur={ageBlurHandler}
            />
            {ageHasError && (
              <p className="error-text">Please enter a valid age.</p>
            )}
          </div>
          <div className={ownersNameClasses}>
            <label htmlFor="ownersName">Owner's name: </label>
            <input
              type="text"
              id="ownersName"
              value={ownersNameValue}
              onChange={ownersNameChangeHandler}
              onBlur={ownersNameBlurHandler}
            />
            {ownersNameHasError && (
              <p className="error-text">Please enter a valid name.</p>
            )}
          </div>
          <div className={ownersPhoneClasses}>
            <label htmlFor="ownersPhone">Owner's phone</label>
            <input
              type="text"
              id="ownersPhone"
              value={ownersPhoneValue}
              onChange={ownersPhoneChangeHandler}
              onBlur={ownersPhoneBlurHandler}
            />
            {ownersPhoneHasError && (
              <p className="error-text">Please enter a valid phone number.</p>
            )}
          </div>
          <div className={ownersEmailClasses}>
            <label htmlFor="ownersEmail">Owner's email</label>
            <input
              type="text"
              id="ownersEmail"
              value={ownersEmailValue}
              onChange={ownersEmailChangeHandler}
              onBlur={ownersEmailBlurHandler}
            />
            {ownersEmailHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button className="form-btn" disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
