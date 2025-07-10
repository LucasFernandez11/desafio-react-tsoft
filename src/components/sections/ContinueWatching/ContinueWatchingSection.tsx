import CardContainer from "../Card/CardContainer"
import useApi from "../../../hooks/useApi"
import type { MovieResponse } from "../../../types/Movie"

export default function ContinueWatchingSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/now_playing')

  return (
    // <section className="py-5">
      <div className="">
        <CardContainer 
          title="Continue Watching" 
          movies={data?.results || []} 
          layout="continue"
          isLoading={isLoading}
          width="w-[280px] md:w-[320px]"
          height="h-[400px] md:h-[250px]"
          error={error?.message}
          slice={2}
        />
      </div>
    // </section>
  )
}
