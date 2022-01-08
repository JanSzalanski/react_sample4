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

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputHasError,
    valueChangeHandler: mailChangedHandler,
    inputBlurHandler: mailChangedBlurHandler,
    resetInput: resetmMail,
  } = useInput((value) => value.includes("@"));

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
    resetmMail();
  };

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control";
  const nameMailClasses = mailInputHasError ? "form-control invalid" : "form-control";

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
          onChange={mailChangedHandler}
          onBlur={mailChangedBlurHandler}
          value={enteredMail}
        />
        {mailInputHasError && <p className="error-text">Please enter a valid email addres </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
