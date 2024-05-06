interface CardProps {
  Title: string;
  Description: string;
  Date: string;
}

export default function Card({ Title, Description, Date }: CardProps) {
  return (
    <div className="bg-white  rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl dark:text-slate-50 font-semibold mb-2">{Title}</h2>
      <p className="text-gray-600 mb-2">{Description}</p>
      <span className="text-gray-500 text-sm">{Date}</span>
      <div className="mt-4">
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Eliminar
        </button>
      </div>
    </div>
  );
}
