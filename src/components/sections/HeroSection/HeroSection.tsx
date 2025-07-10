import CardContainer from "../Card/CardContainer"
import useApi from "../../../hooks/useApi"
import type { MovieResponse } from "../../../types/Movie"
export default function HeroSection(){
   const { data, error, isLoading } = useApi<MovieResponse>('movie/now_playing')
   const mostPopularNewMovie = [...(data?.results || [])].sort(
  (a, b) => b.popularity - a.popularity
)[0];

  return (
    <CardContainer 
      movies={mostPopularNewMovie ? [mostPopularNewMovie] : []}
      layout="hero"
      isLoading={isLoading}
      error={error?.message}
      width="w-full"
      cardContainerClassName="h-[200px] w-full md:h-[250px]" 
      slice={1}
    />
  )
};

export { HeroSection };
