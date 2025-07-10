interface ErrorProps {
  message: string;
  className?: string;
  title?: string;
}

export function Error({ 
  message, 
  className = 'p-4 bg-red-50 rounded-lg',
  title = 'Error'
}: ErrorProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className={className}>
        <p className="text-red-500"><span className="font-semibold">{title}:</span> {message}</p>
      </div>
    </section>
  );
}
