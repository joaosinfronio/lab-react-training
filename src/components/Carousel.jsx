import { useState } from 'react';

const Carousel = (props) => {
  const [index, setIndex] = useState(0);

  const handlePervious = () => {
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(props.images.length - 1);
    } else {
      setIndex(newIndex);
    }
  };
  const handleNext = () => {
    const newIndex = index + 1;
    if (newIndex > props.images.length - 1) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };
  return (
    <div>
      <button onClick={handlePervious}>Previous</button>
      <img src={props.images[index]} alt="" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
