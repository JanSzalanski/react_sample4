import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameChangedBlurHandler,
    resetInput: resetName,
  } = useInput((value) => value.trim() !== "");

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEteredMailTouched] = useState(false);

  const enteredMailIsValid = enteredMail.includes("@");
  const nameMailIsInvalid = !enteredMail && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetName();

    setEnteredMail("");
    setEteredMailTouched(false);
  };
  //////////////////////////////////////

  const mailInputChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const mailInputBlurHandler = (event) => {
    setEteredMailTouched(true);
  };

  ///////////////////////////////////

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const nameMailClasses = nameMailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameChangedBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={nameMailClasses}>
        {nameInputHasError && <p className="error-text">Entered name is invalid </p>}
        <label htmlFor="e-mail">Your email</label>
        <input
          type="email"
          id="email"
          onChange={mailInputChangeHandler}
          onBlur={mailInputBlurHandler}
          value={enteredMail}
        />
        {nameMailIsInvalid && <p className="error-text">Please enter a valid email addres </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
