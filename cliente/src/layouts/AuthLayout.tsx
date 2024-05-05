interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      {children}
    </div>
  );
}
