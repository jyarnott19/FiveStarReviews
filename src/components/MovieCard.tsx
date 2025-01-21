import { Movie } from "@/hooks/useMovies";
import { Card, Image } from "@chakra-ui/react";
import MovieIcon from "./MovieIcon";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card.Root>
      <Image src={movie.Poster} alt={movie.Title} />
      <Card.Header>{movie.Title}</Card.Header>
      <MovieIcon type={movie.Type} />
      <Card.Body></Card.Body>
    </Card.Root>
  );
};

export default MovieCard;
