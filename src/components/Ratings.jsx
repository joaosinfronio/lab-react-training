const Ratings = (props) => {
  let rating = props.children;
  let result = '';
  for (var i = 0; i < 5; i++) {
    if (Math.round(rating) > 0) {
      result += '★';
    } else {
      result += '☆';
    }
    rating = rating - 1;
  }
  return <div className="Ratings">{result}</div>;
};

export default Ratings;
