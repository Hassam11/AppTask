interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function InputField({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
}: InputFieldProps) {
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={id} className="font-semibold text-xl mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="py-2 px-4 border rounded-md border-gray-400 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
