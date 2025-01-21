import { Button, HStack, Input, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "@/hooks/useMovies";
import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardBox from "./MovieCardBox";

const MovieGrid = () => {
  const [searchString, setSearchString] = useState("");
  const [tempString, setTempString] = useState("");
  const { movies, error, loading } = useMovies(searchString);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

      {error && <Text>{error}</Text>}

      {movies && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          gap={10}
          padding="10px"
        >
          {loading &&
            skeletons.map((skeleton) => (
              <MovieCardBox>
                <MovieCardSkeleton key={skeleton} />
              </MovieCardBox>
            ))}
          {movies.map((movie) => (
            <MovieCardBox>
              <MovieCard key={movie.imdbID} movie={movie} />
            </MovieCardBox>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default MovieGrid;
