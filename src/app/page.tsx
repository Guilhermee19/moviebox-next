import Layout from "../components/Layout";
import AdSense from "../components/AdSense";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bem-vindo ao <span className="text-primary-600">NextJS App</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Um projeto moderno desenvolvido com Next.js 14, Tailwind CSS 3 e
          integração completa com Google AdSense para monetização.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-3">
            Começar Agora
          </button>
          <button className="btn-secondary text-lg px-8 py-3">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* AdSense Banner */}
      <AdSense adSlot="1234567890" className="adsense-container my-12" />

      {/* Features Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recursos Principais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra as tecnologias e recursos que tornam este projeto único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card animate-slide-up">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Next.js 14</h3>
            <p className="text-gray-600">
              Framework React com recursos avançados como SSR, SSG e App Router
              para máxima performance.
            </p>
          </div>

          <div
            className="card animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tailwind CSS 3</h3>
            <p className="text-gray-600">
              Framework de CSS utilitário para desenvolvimento rápido de
              interfaces modernas e responsivas.
            </p>
          </div>

          <div
            className="card animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
            <p className="text-gray-600">
              Integração completa com Google AdSense para monetização eficiente
              do seu conteúdo.
            </p>
          </div>
        </div>
      </section>

      {/* AdSense Lateral */}
      <AdSense
        adSlot="0987654321"
        adFormat="rectangle"
        className="adsense-container my-12"
      />

      {/* Content Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Desenvolvimento Moderno
            </h2>
            <p className="text-gray-600 mb-6">
              Este projeto demonstra as melhores práticas de desenvolvimento web
              moderno, combinando performance, SEO e experiência do usuário em
              uma solução completa.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Server-Side Rendering (SSR)
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Design Responsivo
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                TypeScript
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Otimização SEO
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="mb-6 opacity-90">
              Clone este projeto e comece a desenvolver sua aplicação com as
              melhores tecnologias do mercado.
            </p>
            <button className="bg-white text-primary-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Ver Documentação
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
