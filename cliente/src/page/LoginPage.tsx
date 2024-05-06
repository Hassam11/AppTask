import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  AuthForm,
  AuthTitle,
  InputField,
  SubmitButton,
} from "../components/ui/AuthForm";

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
      <AuthForm handleSubmit={handleSubmit}>
        <AuthTitle>Iniciar Sesión</AuthTitle>
        <div className="flex flex-col mb-4">
          <InputField
            type="text"
            label="Usuario"
            id="username"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder="Ingresa tu nombre de usuario"
          />
        </div>
        <div className="flex flex-col mb-4">
          <InputField
            type="password"
            label="Contraseña"
            id="password"
            name="password"
            value={user.password}
            onChange={handleUserChange}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <SubmitButton>Entrar</SubmitButton>
        <div className="text-center text-gray-600 text-sm">
          ¿No tienes una cuenta?{" "}
          <Link to="/signup" className="text-blue-600">
            Regístrate aquí
          </Link>
          .
        </div>
      </AuthForm>
    </AuthLayout>
  );
}
