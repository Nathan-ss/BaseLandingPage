export const About = () => {
  const stats = [
    { name: "Advogados competentes", value: "12" },
    { name: "Casos resolvidos", value: "+300" },
    { name: "Horas por dia", value: "24" },
  ];
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Sobre nós</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Criada para que você evite problemas futuros com o judiciário, ou, quando já criado, possa te oferecer o mais amplo e eficaz quadro da advocacia moderna, voltada a garantir toda a defesa
            de nossos clientes.
          </p>
          <p className="mt-4 text-lg leading-8 text-black">
            A Assessoria Jurídica Administrativa da GENIUS.ADV pode orientar e ajudar você a não cair nas garras dos Tribunais, onde as ações de alongam por muitos anos.
          </p>
          <p className="mt-4 text-lg leading-8 text-black">Os profissionais estarão à sua disposição, em uma consulta por videoconferência, com a duração de até 40 minutos, todas individualizadas.</p>
          <p className="mt-4 text-lg leading-8 text-black">
            Você terá tempo para tirar todas as suas dúvidas que atrapalham o seu desenvolvimento profissional e emocional, pois temos a plena consciência das muitas dificuldades em entender as várias
            faces do Direito.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-black">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
