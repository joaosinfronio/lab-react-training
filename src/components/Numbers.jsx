const Numbers = (props) => {
  const numbers = [...Array(props.limit).keys()].map((i) => i + 1);
  console.log(numbers);
  const divStyle = {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vmin',
    display: 'flex',
    flexDirection: 'row',
  };
  return (
    <div>
      <ul className="Numbers">
        {numbers.map((number, index) => {
          console.log(number);
          return (
            <li
              style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
              key={index}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Numbers;
