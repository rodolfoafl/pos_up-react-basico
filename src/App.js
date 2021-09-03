import "./App.css";

const App = () => {
  return (
    <div className="grid-2">
      <div className="left">
        <h2>LISTA DE FILMES PREFERIDOS</h2>
        <div className="grid-3">
          <div className="movie-card">
            <h3>Blade Runner</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg"
              alt=""
            />
            <button className="action-button">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div className="movie-card">
            <h3>Blade Runner</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg"
              alt=""
            />
            <button className="action-button">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div className="movie-card">
            <h3>Blade Runner</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg"
              alt=""
            />
            <button className="action-button">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div className="movie-card">
            <h3>Blade Runner</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg"
              alt=""
            />
            <button className="action-button">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>BUSCA DE FILMES</h2>
        <form className="search-form">
          <input type="text" name="" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="grid-3">
          <div className="movie-card">
            <h3>Blade Runner</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg"
              alt=""
            />
            <button className="action-button">
              <i class="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
