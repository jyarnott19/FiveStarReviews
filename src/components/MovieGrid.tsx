import { Button, HStack, Input, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "@/hooks/useMovies";
import { useState } from "react";
import MovieCard from "./MovieCard";

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
      <HStack>
        <Input
          title="search"
          type="text"
          value={tempString}
          onChange={(e) => setTempString(e.target.value)}
        />
        <Button onClick={runSearch} colorPalette="teal">
          Search
        </Button>
      </HStack>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {movies && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          gap={10}
          padding="10px"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default MovieGrid;
