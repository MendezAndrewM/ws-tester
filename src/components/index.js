import Header from './Header';
import SocketConnection from "./SocketConnection";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="card col-12">
          <div className="card-body">
            <Header />
            <SocketConnection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
