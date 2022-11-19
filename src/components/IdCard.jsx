const IdCard = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.picture} alt={props.name} />
      </div>
      <div className="cardInfo">
        <div>
          <strong>First name: </strong> <span>{props.firstName}</span>
        </div>
        <div>
          <strong>Last name: </strong> <span>{props.lastName}</span>
        </div>
        <div>
          <strong>Gender: </strong> <span>{props.gender}</span>
        </div>
        <div>
          <strong>Height: </strong> <span>{props.height}</span>
        </div>
        <div>
          <strong>Birth: </strong>{' '}
          <span>
            {props.birth.toLocaleDateString('en-EN', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
