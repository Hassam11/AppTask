import AuthLayout from "../layouts/AuthLayout";

export default function HomePage() {
  return (
    <AuthLayout>
      <h3>Desde Home Page</h3>
      <nav></nav>

      {/* card */}
      <div>
        <h2>Titulo</h2>
        <p>Descripción</p>
        <span>Fecha 12/12/2024</span>
        <div>
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
      </div>
      <button>Agregar lista</button>
    </AuthLayout>
  );
}
