const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-[var(--marine-blue)] font-bold text-2xl">{children}</h1>
  );
};

export default Title;
