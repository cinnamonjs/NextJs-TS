import { FC } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface FormFieldProps {
  type: string;
  placeholder?: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  valueAsNumber?: boolean;
}

export const FormField: FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => (
  <div className="flex flex-col mt-4">
    {error && <span className="text-xs text-red-600">{error.message}</span>}
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className="px-2 py-1 text-black rounded"
    />
  </div>
);

FormField.displayName = "FormField";
