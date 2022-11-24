import { useState } from 'react';
import empty from './../assets/images/dice-empty.png';
import dice1 from './../assets/images/dice1.png';
import dice2 from './../assets/images/dice2.png';
import dice3 from './../assets/images/dice3.png';
import dice4 from './../assets/images/dice4.png';
import dice5 from './../assets/images/dice5.png';
import dice6 from './../assets/images/dice6.png';

const Dice = () => {
  const options = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [picture, setPicture] = useState(empty);
  console.log(picture);

  const handleClick = () => {
    setPicture(empty);
    console.log(picture);

    setTimeout(() => setPicture(options[Math.round(Math.random() * 5)]), 1000);
  };

  return <img onClick={handleClick} src={picture} alt="" />;
};

export default Dice;
