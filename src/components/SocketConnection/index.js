import { useState } from 'react';
import Url from './Url';
import ConnectionHeaders from './ConnectionHeaders';

const SocketConnection = () => {
  const [url, setUrl] = useState('')

  return (
    <div className="card col-12">
      <div className="card-body row">
        <div className="col-12 row">
          <Url setUrl={setUrl} />
        </div>
        <div className="col-12">
          {/* TODO: Request Headers Component */}
        </div>
        <div className="col-6">
          {/* TODO: Messages from Server Component */}
        </div>
        <div className="col-6">
          {/* TODO: Messages to Server Component */}
        </div>
      </div>
    </div>
  );
};

export default SocketConnection;
