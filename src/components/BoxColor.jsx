const BoxColor = (props) => {
  const rgb = `rgba(${props.r}, ${props.g}, ${props.b})`;
  const divStyle = {
    color: 'white',
    backgroundColor: rgb,
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vmin',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={divStyle} className="card">
      <div>{rgb}</div>
      <div>
        {'#' +
          props.r.toString(16) +
          props.g.toString(16) +
          props.b.toString(16)}
      </div>
    </div>
  );
};

export default BoxColor;
