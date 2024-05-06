interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className=" bg-slate-50  h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
}
