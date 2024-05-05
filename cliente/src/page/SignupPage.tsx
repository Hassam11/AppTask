import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout>
      <form className="mx-auto max-w-md mt-10 p-6 bg-white shadow-md rounded-md">
        <div className="font-bold text-3xl text-[#292929] text-center mb-6">
          Registro
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="user" className="font-semibold text-xl mb-2">
            Usuario
          </label>
          <input
            type="text"
            placeholder="Ingrese su nombre de usuario"
            className="py-2 px-4 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="font-semibold text-xl mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            className="py-2 px-4 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="passwordConfirmation"
            className="font-semibold text-xl mb-2"
          >
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            placeholder="Confirme su contraseña"
            className="py-2 px-4 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full text-2xl mb-4">
          Registrarse
        </button>
        <div className="text-center text-gray-600 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-600">
            Inicia sesión aquí
          </Link>
          .
        </div>
      </form>
    </AuthLayout>
  );
}
