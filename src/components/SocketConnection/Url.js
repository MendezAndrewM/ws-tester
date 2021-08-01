import { useEffect, useState } from 'react';

const Url = ({ setUrl }) => {
  const [value, setValue] = useState({url: ''});

  useEffect(() => {
    setUrl(value.url);
  }, [value.url, setUrl])

  const handleChange = () => (event) => {
    setValue({ url: event.target.value });
  };

  return (
    <div className="row input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">Request URL</span>
      </div>

      <input
        type="text"
        className="form-control"
        placeholder="ws://url"
        aria-label="request url"
        aria-describedby="basic-addon1"
        onChange={handleChange()}
        value={value.url}
      />

      <div className="input-group-append">
        <div className="input-group-text">
          <button
            className="btn btn-secondary"
            style={{ border: 'none'}}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}

export default Url;
