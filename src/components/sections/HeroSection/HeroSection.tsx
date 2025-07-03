import CardContainer from "../Card/CardContainer"
import useApi from "../../../hooks/useApi"
import type { MovieResponse } from "../../../types/Movie"
export default function HeroSection(){
   const { data, error, isLoading } = useApi<MovieResponse>('movie/top_rated')

  return (
    <CardContainer 
      movies={data?.results || []} 
      layout="hero"
      isLoading={isLoading}
      error={error?.message}
      width="w-full"
      slice={1}
    />
  )
};

export { HeroSection };
