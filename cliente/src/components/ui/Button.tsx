interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
}

const Button = ({ type, children }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
