export default function Loading() {
  return (
    <div className="container-x section animate-pulse" aria-busy="true" aria-label="Loading">
      <div className="h-3 w-40 rounded bg-surface" />
      <div className="mt-6 h-12 w-3/4 max-w-2xl rounded bg-surface" />
      <div className="mt-4 h-6 w-2/3 max-w-xl rounded bg-surface" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => <div key={i} className="h-48 rounded-lg bg-surface" />)}
      </div>
    </div>
  );
}
