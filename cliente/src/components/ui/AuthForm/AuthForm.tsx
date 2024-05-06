interface AuthFormProps {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm({ handleSubmit, children }: AuthFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md lg:w-[400px] mt-10 p-8 bg-white shadow-lg rounded-md"
    >
      {children}
    </form>
  );
}
