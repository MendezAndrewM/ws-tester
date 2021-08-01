import { useState } from "react";

const ConnectionHeaders = () => {
  const [headers, setHeaders] = useState({
    Connection: 'Upgrade',
    Upgrade: 'websocket'
  });

  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Key</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
        {
          Object.keys(headers).map((item, index) => (
            <tr key={index}>
              <td></td>
              <td>{item}</td>
              <td>{headers[item]}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default ConnectionHeaders;
