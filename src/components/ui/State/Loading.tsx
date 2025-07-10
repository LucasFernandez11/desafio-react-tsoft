interface LoadingProps {
  title?: string;
  className?: string;
  spinnerClassName?: string;
}

export function Loading({
  title="Loading",
  className = 'h-40', 
  spinnerClassName = 'h-12 w-12 border-t-2 border-b-2 border-blue-500' 
}: LoadingProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className={`flex justify-center items-center ${className}`}>
        <div className={`animate-spin rounded-full ${spinnerClassName}`}></div>
      </div>
    </section>
  );
}
