import { Plans } from "@/Components/plans";

export const Team = () => {
  return (
    <section className="bg-white dark:bg-slate-800" id="yourplan">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Escolha o seu tipo de plano
          </h2>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Plans
            title={"Planos de Saúde"}
            description={"Cuide da saúde com tranquilidade"}
            values={[
              "Ampla cobertura médica",
              "Atendimento personalizado 24/7",
              "Assistência em emergências",
              "Rede credenciada de qualidade",
              "Acesso a exames e procedimentos",
            ]}
            hash={"saude"}
          />

          <Plans
            title={"Planos Pets"}
            description={"Bem-estar para seu melhor amigo"}
            values={[
              "Cobertura abrangente para pets",
              "Atendimento veterinário especializado",
              "Descontos em serviços pet",
              "Cobertura para emergências",
              "Opções de hospedagem e cuidados",
            ]}
            hash={"pet"}
          />

          <Plans
            title={"Seguros"}
            description={"Proteja o que é mais importante para você"}
            values={[
              "Proteção abrangente para vida e veículos",
              "Assistência em caso de sinistros",
              "Atendimento ágil e eficiente",
              "Cobertura personalizada",
              "Rede de parceiros confiáveis",
            ]}
            hash={"seguros"}
          />

          <Plans
            title={"Planos Odontológicos"}
            description={"Um sorriso saudável é fundamental"}
            values={[
              "Cobertura completa em odontologia",
              "Atendimento com especialistas",
              "Procedimentos de prevenção e tratamento",
              "Rede de clínicas renomadas",
              "Assistência odontológica de qualidade",
            ]}
            hash={"odonto"}
          />
        </div>
      </div>
    </section>
  );
};
