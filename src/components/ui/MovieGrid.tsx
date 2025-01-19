import { Text } from "@chakra-ui/react";
import useMovies from "@/hooks/useMovies";
import { useState } from "react";

const MovieGrid = () => {
  const [searchString, setSearchString] = useState("");
  const [tempString, setTempString] = useState("");
  const { movies, error, loading } = useMovies(searchString);
  const runSearch = () => {
    console.log("searchString", searchString);

    setSearchString(tempString);
  };
  return (
    <>
      <input
        title="search"
        type="text"
        value={tempString}
        onChange={(e) => setTempString(e.target.value)}
      />
      <button onClick={runSearch}>Search</button>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h2>
                {movie.Title} ({movie.Year})
              </h2>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieGrid;
