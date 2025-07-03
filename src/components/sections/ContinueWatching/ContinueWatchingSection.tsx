import CardContainer from "../Card/CardContainer"
import useApi from "../../../hooks/useApi"
import type { MovieResponse } from "../../../types/movies.types"

export default function ContinueWatchingSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/now_playing')

  return (
    <section className="bg-zinc-900 py-8">
      <div className="container mx-auto px-2 sm:px-4">
        <CardContainer 
          title="Continuar viendo" 
          movies={data?.results || []} 
          layout="continue"
          isLoading={isLoading}
          error={error?.message}
          slice={4}
        />
      </div>
    </section>
  )
}
