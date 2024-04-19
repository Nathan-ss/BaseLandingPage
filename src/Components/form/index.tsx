import { useHashStore } from "@/utils/hash";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  plan: string;
}
export const Form = () => {
  const { hashValue } = useHashStore();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (hashValue != "" && hashValue != getValues("plan")) {
      setValue(
        "plan",
        hashValue == "saude"
          ? "Saúde - Individual"
          : hashValue == "odonto"
          ? "Odontológico"
          : hashValue == "seguros"
          ? "Seguro de veículos"
          : "Pet"
      );
    }
  }, [hashValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          subject: "Novo contato",
          ...data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        throw new Error(error);
      }

      setSuccess(true);
    } catch (error) {
      // setError(error.message);
    }
  };
  return (
    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Entre em contato
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="firstName"
              className="inline-block mb-1 font-medium"
            >
              Nome
            </label>
            <input
              {...register("name", { required: "Campo obrigatório" })}
              placeholder="John"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="firstName"
              aria-required
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="email" className="inline-block mb-1 font-medium">
              E-mail
            </label>
            <input
              {...register("email", { required: "Campo obrigatório" })}
              placeholder="john.doe@example.org"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="phone" className="inline-block mb-1 font-medium">
              Telefone
            </label>
            <input
              {...register("phone", { required: "Campo obrigatório" })}
              placeholder="(11) 0000-000"
              required
              type="phone"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              aria-required
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="phone" className="inline-block mb-1 font-medium">
              Idades de todos envolvidos
            </label>
            <input
              {...register("age")}
              placeholder="(Ex:2,28,34)"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="age"
              name="age"
            />
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Escolha o seu plano
            </label>
            <div className="mt-2">
              <select
                {...register("plan", { required: "Campo obrigatório" })}
                id="country"
                name="country"
                placeholder="Ex:Individual"
                autoComplete="country-name"
                required
                className="block  w-full   text-gray-900  focus:ring-inset focus:ring-indigo-600   flex-grow h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              >
                <option>Saúde - Individual</option>
                <option>Saúde - Familiar</option>
                <option>Saúde - Crianças</option>
                <option>Saúde - Empresarial</option>
                <option>Saúde - Por adesão</option>
                <option>Odontológico</option>
                <option>Seguro de vida</option>
                <option>Seguro de veículos</option>
                <option>Pet</option>
              </select>
            </div>
          </div>

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
