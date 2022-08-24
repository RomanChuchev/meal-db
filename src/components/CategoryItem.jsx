import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div
      className="card border-primary card-item mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <Link to={`/category/${strCategory}`} style={{ textDecoration: "none" }}>
        <div className="card-header">
          <strong>{strCategory}</strong>
        </div>
        <div className="card-body">
          <img className="img-card" src={strCategoryThumb} alt={strCategory} />
          <p className="card-text small">
            {strCategoryDescription.slice(0, 60) + "..."}
          </p>
        </div>
      </Link>
    </div>
  );
}
export { CategoryItem };
