import { useEffect, useState } from "react";
import { Services } from "./services";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const texts = [
  "Procura um seguro saúde?",
  "Pensou em seguro vida?",
  "Seu pet sempre seguro!",
  "Precisa seguro automotivo?",
];

const TextChanger = (): JSX.Element => {
  const [index, setIndex] = useState(0);

  const changeText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeText();
    }, 10000); // 1 minuto em milissegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.h1
        key={index}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none"
      >
        {texts[index]}
      </motion.h1>
    </AnimatePresence>
  );
};
export const Entry = (): JSX.Element => {
  return (
    <div className=" pt-20" id="home">
      <div className="relative">
        <img
          src="https://ransomseguros.com.br/wp-content/uploads/2020/11/WhatsApp-Image-2020-04-22-at-10.03.03-1-1024x682.jpeg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />

        <div className="relative bg-opacity-75 bg-gray-900">
          <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 162"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <TextChanger />
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                  A vida é o que importa <br /> Esteja preparado para momentos
                  difíceis{" "}
                </p>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-zinc-50 hover:text-teal-accent-700"
                >
                  Saiba mais
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Entre em contato
                  </h3>

                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        Nome
                      </label>
                      <input
                        placeholder="John"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Telefone
                      </label>
                      <input
                        placeholder="(11) 0000-000"
                        required
                        type="phone"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      Nós respeitamos sua privacidade. Cancele a inscrição a
                      qualquer momento.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
