import { useState, useEffect } from "react";
import Square from './Square';
import CounterButtons from './CounterButtons';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [squareColor, setColor] = useState('blue');

  useEffect(() => {
    const color = count % 2 === 0 ? 'blue' : 'green';
    setColor(color);
  }, [count]);

  return (
    <div className="row">

      <div className="col-3">
        <Square squareColor={squareColor} />
      </div>

      <div className="col-6 row">
        <span className="col-12">
          Current Count: {count}
        </span>
        <CounterButtons goose={setCount} count={count} uselessProp="potato" />
      </div>

    </div>
  )
}

export default Counter;