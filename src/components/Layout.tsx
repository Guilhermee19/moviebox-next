import { ReactNode } from "react";
import Head from "next/head";
import AdSenseScript from "./AdSenseScript";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Next.js com Tailwind e AdSense",
  description = "Projeto moderno com Next.js, Tailwind CSS 3 e Google AdSense",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdSenseScript />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container-max section-padding">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-primary-600">
                  NextJS App
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                >
                  Contato
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container-max section-padding py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="container-max section-padding py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">NextJS App</h3>
                <p className="text-gray-300">
                  Projeto desenvolvido com Next.js, Tailwind CSS 3 e Google
                  AdSense.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contato</h3>
                <p className="text-gray-300">
                  email@exemplo.com
                  <br />
                  (11) 99999-9999
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 NextJS App. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
