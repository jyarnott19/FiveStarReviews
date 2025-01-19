import { useState, useEffect } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}
interface MovieSearchResponse {
  totalResults: number;
  Search: Movie[];
}
const apikey = "4512e9de";
//const searchString = "Christmas";

const useMovies = (searchString: string) => {
   
      const [movies, setMovies] = useState<Movie[]>([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        if (!searchString) return;
        const controller = new AbortController();
        setLoading(true);
        apiClient
          .get<MovieSearchResponse>("/?apikey=" + apikey + "&s=" + searchString, {signal: controller.signal})
          .then((response) => {
            setMovies(response.data.Search);
            setLoading(false);
          })
          .catch((error) => {
            if (error instanceof CanceledError) return;            
            setError(error.message);
            setLoading(false);
          });
          return () => {controller.abort();}
      }, [searchString]);
      return { movies, error, loading };

}


export default useMovies;