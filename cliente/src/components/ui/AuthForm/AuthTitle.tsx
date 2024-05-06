interface AuthTitleProps {
  children: React.ReactNode;
}

export default function AuthTitle({ children }: AuthTitleProps) {
  return (
    <div className="font-bold text-3xl text-[#292929] text-center mb-6">
      {children}
    </div>
  );
}
