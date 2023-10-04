export const Item = ({ imagePath, title, count, days }) => {
  return (
    <div className="main-content__item main-item">
      <img src={imagePath} alt="#" className="main-item__image" />
      <div className="main-item__title">{title}</div>
      <div className="main-item__count">{count}</div>
      <div className="main-item__days">{days}</div>
    </div>
  );
};
