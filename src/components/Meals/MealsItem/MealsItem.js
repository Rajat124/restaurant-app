import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.meals}>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      {/* <div></div> */}
    </li>
  );
};

export default MealsItem;
