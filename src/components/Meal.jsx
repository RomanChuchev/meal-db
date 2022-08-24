import { Link } from "react-router-dom";

function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div
      className="card border-primary card-item mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <Link to={`/meal/${idMeal}`} style={{ textDecoration: "none" }}>
        <div className="card-header card-top">
          <strong>{strMeal.slice(0, 37)}</strong>
        </div>
        <div className="card-meal">
          <img className="img-meal" src={strMealThumb} alt={strMeal} />
        </div>
      </Link>
    </div>
  );
}
export { Meal };
