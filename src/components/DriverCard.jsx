import Ratings from './Ratings';

const DriverCard = (props) => {
  return (
    <div className="DriverCard card">
      <div>
        <img className="imageCard" src={props.img} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <Ratings>{props.rating}</Ratings>
        <p>{props.car.model + ' - ' + props.car.licensePlate} </p>
      </div>
    </div>
  );
};

export default DriverCard;
