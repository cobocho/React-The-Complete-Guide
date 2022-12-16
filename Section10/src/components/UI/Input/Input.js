import classes from "./input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="props.type">{props.labelValue}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.enteredValue}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    </div>
  );
};

export default Input;
