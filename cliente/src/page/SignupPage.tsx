import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import {
  AuthForm,
  SubmitButton,
  InputField,
  AuthTitle,
} from "../components/ui/AuthForm";

export default function SignupPage() {
  const handleSubmit = () => {
    console.log("ga");
  };
  return (
    <AuthLayout>
      <AuthForm handleSubmit={handleSubmit}>
        <AuthTitle>Registro</AuthTitle>
        <div className="flex flex-col mb-4">
          <InputField
            type="text"
            label="Usuario"
            id="username"
            name="username"
            // value={user.username}
            // onChange={handleUserChange}
            placeholder="Ingrese su nombre de usuario"
          />
        </div>
        <div className="flex flex-col mb-4">
          <InputField
            type="password"
            label="Contraseña"
            id="password"
            name="password"
            // value={user.username}
            // onChange={handleUserChange}
            placeholder="Ingrese contraseña"
          />
        </div>
        <div className="flex flex-col mb-4">
          <InputField
            type="password"
            label="Confirmar Contraseña"
            id="passwordConfirmation"
            name="passwordConfirmation"
            // value={user.username}
            // onChange={handleUserChange}
            placeholder="Confirme su contraseña"
          />
        </div>
        <SubmitButton>Registrarse</SubmitButton>
        <div className="text-center text-gray-600 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-blue-600">
            Inicia sesión aquí
          </Link>
          .
        </div>
      </AuthForm>
    </AuthLayout>
  );
}
