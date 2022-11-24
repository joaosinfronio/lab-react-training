const Ratings = (props) => {
  // let rating = props.children;
  // let result = '';
  // for (var i = 0; i < 5; i++) {
  //   if (Math.round(rating) > 0) {
  //     result += '★';
  //   } else {
  //     result += '☆';
  //   }
  //   rating = rating - 1;
  // }

  const fullStarCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullStarCount;
  return <div>{'★'.repeat(fullStarCount) + '☆'.repeat(emptyStarCount)}</div>;
};

export default Ratings;
