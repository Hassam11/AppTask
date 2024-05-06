import Card from "../components/ui/Card/Card";
import AuthLayout from "../layouts/AuthLayout";

export default function HomePage() {
  return (
    <AuthLayout>
      <h3 className="text-3xl font-semibold mb-4">Tareas Pendientes</h3>
      {/* Card de tarea */}
      <Card
        Title="Tarea 1"
        Description="Tarea 1 Description"
        Date="12/12/2024"
      />
      {/* <Card
        Title="Tarea 2"
        Description="Tarea 2 Description"
        Date="20/12/2024"
      /> */}

      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        Agregar Tarea
      </button>
    </AuthLayout>
  );
}
