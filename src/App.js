import "./App.css";
import netflixlogo from "./assets/images/logo-netflix.png";

const App = () => {
  return (
    <div className="App">
      <header>
        <img alt="Netflix Logo" src={netflixlogo} />
      </header>
      <div className="cards-shelf">
        <h1>Émissions TV</h1>
        <div className="card-scroller">
          <div className="card">
            <img src="" alt="" />
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
