import { cn } from "@/utils/cn";
import { FC } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";

interface FormFieldProps {
  type: string;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  error?: FieldError;
  valueAsNumber?: boolean;
  containerClassName?: string;
  className?: string;
}

export const FormField: FC<FormFieldProps> = ({
  type,
  placeholder,
  register,
  error,
  containerClassName,
  className,
}) => (
  <div className={cn("flex flex-col mt-4", containerClassName)}>
    {error && <span className="text-xs text-red-600">{error.message}</span>}
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className={cn("px-2 py-1 text-black rounded", className)}
    />
  </div>
);

FormField.displayName = "FormField";
