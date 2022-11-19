const Random = (props) => {
  return (
    <div className="card">
      <span>
        Random value between {props.min} and {props.max} ={'>'}{' '}
        {Math.floor(props.min + Math.random() * props.max)}{' '}
      </span>
    </div>
  );
};

export default Random;
