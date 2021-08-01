const CounterButtons = ({ goose, count, uselessProp }) => {
  console.log(uselessProp);

  return (
    <div className="row">
      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => goose(count + 1)}
        >
          Increment
        </button>
      </div>

      <div className="col-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => goose(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterButtons;
