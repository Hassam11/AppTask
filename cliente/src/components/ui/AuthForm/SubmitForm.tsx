export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full text-2xl mb-4"
    >
      {children}
    </button>
  );
}
