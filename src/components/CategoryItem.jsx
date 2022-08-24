function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div
      className="card border-primary card-item mb-3"
      style={{ maxWidth: "20rem" }}
    >
      <div className="card-header">
        <strong>{strCategory}</strong>
      </div>
      <div className="card-body">
        <img className="img-card" src={strCategoryThumb} alt={strCategory} />
        <p className="card-text small">
          {strCategoryDescription.slice(0, 60) + "..."}
        </p>
      </div>
    </div>
  );
}
export { CategoryItem };
