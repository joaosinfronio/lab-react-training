import visaImage from './../assets/images/visa.png';

const CreditCard = (props) => {
  const mask = '•••• •••• ••••' + props.number.slice(-4);
  let icon = props.type === 'Visa' ? visaImage : visaImage;
  const divStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-block',
    flexDirection: 'column',
    width: '400px',
    height: '230px',
    borderRadius: '15px',
    margin: '15px',
    marginBotton: '0px',
  };

  return (
    <div style={divStyle} className="card">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <img
          style={{ width: '60px', margin: '15px' }}
          src={icon}
          alt={props.type}
        />
      </div>
      <div>
        <h2 style={{ fontSize: '40px', marginBottom: '0' }}> {mask}</h2>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '15px',
          marginBottom: '0',
        }}
      >
        <p>
          Expires:
          {(props.expirationMonth / 10 > 1
            ? props.expirationMonth.toString()
            : '0' + props.expirationMonth.toString()) +
            '/' +
            props.expirationYear.toString().substring(2) +
            '  '}
        </p>
        <p
          style={{
            marginLeft: '15px',
          }}
        >
          {' '}
          {props.bank}
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '15px',
        }}
      >
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
