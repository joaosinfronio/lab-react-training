const Greetings = (props) => {
  const greeting =
    props.lang == 'de'
      ? 'Hallo'
      : props.lang == 'en'
      ? 'Hello'
      : props.lang == 'es'
      ? 'Hola'
      : props.lang == 'fr'
      ? 'Bounjour'
      : 'OLA';
  return (
    <div className="card">
      <span style={{ marginRight: '10px' }}>{greeting} </span>
      {props.children}
    </div>
  );
};

export default Greetings;
