export const About = () => {
  const stats = [
    { name: "Advogados competentes", value: "12" },
    { name: "Casos resolvidos", value: "+300" },
    { name: "Horas por dia", value: "24" },
  ];
  return (
    <div id="about">
      <section className="bg-white dark:bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              Da Saúde à Tranquilidade Completa
            </h2>
            <p className="mb-4">
              Nossa empresa nasceu com um sonho: oferecer planos de saúde
              acessíveis e de qualidade para todos. Começamos pequenos, mas com
              um grande compromisso com nossos clientes. Ao longo dos anos,
              crescemos e nos tornamos uma referência no mercado, expandindo
              nossa atuação para outros segmentos e oferecendo soluções
              completas para a sua tranquilidade.
            </p>
            <p>
              Queremos oferecer soluções completas em planos de saúde, seguros e
              outros serviços, com foco na tranquilidade e no bem-estar de
              nossos clientes.
            </p>
            <a
              href="#"
              className="inline-flex items-center mt-5 text-gray-200 bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Entre em contato com um de nossos atendentes
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
