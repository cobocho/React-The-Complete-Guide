import useInput from "../hooks/use-input";

const nameValidator = (name) => {
  return name.trim() !== "";
};

const emailValidator = (email) => {
  return email.includes("@");
};

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: firstNamereset,
  } = useInput(nameValidator);

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNamereset,
  } = useInput(nameValidator);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailreset,
  } = useInput(emailValidator);

  let formInvalid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError || lastNameHasError || emailHasError) {
      return;
    }

    formInvalid = false;

    firstNamereset();
    lastNamereset();
    emailreset();
  };

  const firstNameClassesName = `form-control ${firstNameHasError && "invalid"}`;
  const lastNameClassesName = `form-control ${lastNameHasError && "invalid"}`;
  const emailClassesName = `form-control ${emailHasError && "invalid"}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClassesName}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
            value={enteredFirstName}
          />
          {firstNameHasError && <p>enter valid first name!</p>}
        </div>
        <div className={lastNameClassesName}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            type="text"
            id="name"
          />
          {lastNameHasError && <p>enter valid last name!</p>}
        </div>
      </div>
      <div className={emailClassesName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p>enter valid email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={formInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
