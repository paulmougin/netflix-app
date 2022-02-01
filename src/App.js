import "./App.css";
import netflixlogo from "./assets/images/logo-netflix.png";
import moviesdata from "./assets/movies_rnexgr.json";

const App = () => {
  return (
    <div className="App">
      <header>
        <img alt="Netflix Logo" src={netflixlogo} />
      </header>

      <div className="library">
        {moviesdata.map((shelf, index) => {
          return (
            <div className="card-shelf">
              <h2>{shelf.category}</h2>
              <div className="card-scroller">
                {shelf.images.map((cardcover, index) => {
                  return <img src={cardcover} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
