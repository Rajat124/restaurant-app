import Input from "../../UI/Input";
import classes from "./MealsItemForm.module.css";

const MealsItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          steps: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} type="button">
        + Add
      </button>
    </form>
  );
};

export default MealsItemForm;
