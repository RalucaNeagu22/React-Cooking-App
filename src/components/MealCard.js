function MealCard({ thumb, title }) {
  return (
    <div>
      <img
        src={thumb}
        alt={title}
        className="d-flex align-items-end rounded-5 img-fluid"
      />
      <p className="fw-semibold m-auto row col-12">{title}</p>
    </div>
  );
}

export default MealCard;
