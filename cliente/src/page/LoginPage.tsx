import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Usuario:", user.username);
    console.log("Contraseña:", user.password);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md mt-10 p-6 bg-white shadow-md rounded-md"
      >
        <div className="font-bold text-3xl text-[#292929] text-center mb-6">
          Iniciar Sesión
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="font-semibold text-xl mb-2">
            Usuario
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder="Ingresa tu nombre de usuario"
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
            name="password"
            value={user.password}
            onChange={handleUserChange}
            placeholder="Ingresa tu contraseña"
            className="py-2 px-4 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full text-2xl mb-4"
        >
          Entrar
        </button>
        <div className="text-center text-gray-600 text-sm">
          ¿No tienes una cuenta?
          <Link to="/signup" className="text-blue-600">
            Regístrate aquí
          </Link>
          .
        </div>
      </form>
    </AuthLayout>
  );
}
