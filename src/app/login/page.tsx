"use client";
// import libraries
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import conponents
import { FormField } from "@/components/FormField";
import Button from "@/components/Button";

// create validation object
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export default function Login() {
  // create form object
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: { email: "example@gmail.com" },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.error(errors);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="flex flex-col items-center min-h-screen gap-4 p-24">
      <div className="text-4xl">Login page</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          type="email"
          register={register("email")}
          error={errors.email}
        />
        <FormField
          type="password"
          register={register("password")}
          error={errors.password}
        />
        <div className="mt-4">
          <Button type="submit" disabled={isSubmitting}>
            submit
          </Button>
        </div>
      </form>
    </main>
  );
}
