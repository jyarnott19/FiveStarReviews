import { Movie } from "@/hooks/useMovies";
import { Card, Image } from "@chakra-ui/react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={movie.Poster} alt={movie.Title} />
      <Card.Header>{movie.Title}</Card.Header>
      <Card.Body></Card.Body>
    </Card.Root>
  );
};

export default MovieCard;
