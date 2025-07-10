import CardContainer from "../Card/CardContainer"
import useApi from "../../../hooks/useApi"
import type { MovieResponse } from "../../../types/Movie"

export default function PopularSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/popular')

  return (
    <CardContainer 
      title="Popular" 
      movies={data?.results || []} 
      layout="popular"
      isLoading={isLoading}
      error={error?.message}
      width="w-[50%]"
      slice={3}
    />
  )
}
