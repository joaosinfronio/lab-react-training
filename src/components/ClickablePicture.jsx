import { useState } from 'react';

const ClickablePicture = (props) => {
  const [glasses, setGlasses] = useState(false);

  const changePicture = () => {
    setGlasses(!glasses);
  };

  return (
    <img
      onClick={changePicture}
      src={glasses ? props.imgClicked : props.img}
      alt=""
    />
  );
};

export default ClickablePicture;
