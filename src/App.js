import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchList from "./components/SearchList";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [movies, setMovies] = useState(
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : []
  );
  const [searchResult, setSearchResult] = useState([]);

  const removeFromList = (movieObj) => {
    setMovies(movies.filter((m) => m.Title !== movieObj.Title));
    localStorage.setItem("movies", JSON.stringify(movies));
    return alert("Filme removido com sucesso!");
  };

  const addToList = (movieObj) => {
    movieObj.onList = true;

    if (movies?.length > 0) {
      if (!movies?.find((m) => m.Title === movieObj.Title)) {
        setMovies([...movies, movieObj]);
        localStorage.setItem("movies", JSON.stringify(movies));
        return alert("Filme adicionado com sucesso!");
      }
      return alert("Filme já existente na lista!");
    } else {
      setMovies([...movies, movieObj]);
      localStorage.setItem("movies", JSON.stringify(movies));
      return alert("Filme adicionado com sucesso!");
    }
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <div className="grid-2">
      <div className="left">
        <h2>LISTA DE FILMES PREFERIDOS</h2>
        <MovieList movies={movies} action={removeFromList} />
      </div>
      <div className="right">
        <h2>BUSCA DE FILMES</h2>
        <SearchForm setSearchResult={setSearchResult} />
        <SearchList movies={searchResult} action={addToList} />
      </div>
    </div>
  );
};

export default App;
