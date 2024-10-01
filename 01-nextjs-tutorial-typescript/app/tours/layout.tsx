function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="py-2 w-1/2 bg-slate-400 mb-4 rounded">
        <h1 className="text-3xl text-white text-center">Nested Layout</h1>
      </header>
      {children}
    </div>
  );
}
export default ToursLayout;
