import CardContainer from "../Card/CardContainer";
import useApi from "../../../hooks/useApi";
import type { MovieResponse } from "../../../types/Movie";

export default function ContinueWatchingSection() {
  const { data, error, isLoading } = useApi<MovieResponse>('movie/now_playing');

  return (
    <section className="overflow-x-auto max-w-full scrollbar-thin">
      <div className="overflow-x-auto max-w-full scrollbar-thin">
        <CardContainer 
          title="Continue Watching" 
          movies={data?.results || []} 
          layout="continue"
          isLoading={isLoading}
          error={error?.message}
          slice={2}
        />
      </div>
    </section>
  );
}
