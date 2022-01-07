import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredMailTouched, setEteredMailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredMailIsValid = enteredMail.includes("@");
  const nameMailIsInvalid = !enteredMail && enteredMailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
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

  const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control";
  const nameMailClasses = nameMailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={nameMailClasses}>
        {nameInputIsInvalid && <p className="error-text">Entered name is invalid </p>}
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
