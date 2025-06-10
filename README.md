# Next.js com Tailwind CSS 3 e Google AdSense

Um projeto moderno e completo desenvolvido com Next.js 14, Tailwind CSS 3 e integração com Google AdSense para monetização.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com SSR, SSG e App Router
- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 3** - Framework CSS utilitário
- **Google AdSense** - Plataforma de monetização

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Google AdSense (para monetização)

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd nextjs-tailwind-adsense
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` e adicione seu ID do Google AdSense:
```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-seu-id-adsense
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── components/
│   ├── AdSense.tsx          # Componente do Google AdSense
│   ├── AdSenseScript.tsx    # Script do AdSense
│   └── Layout.tsx           # Layout principal
├── pages/
│   ├── _app.tsx            # Configuração da aplicação
│   └── index.tsx           # Página inicial
├── styles/
│   └── globals.css         # Estilos globais com Tailwind
├── next.config.js          # Configuração do Next.js
├── tailwind.config.js      # Configuração do Tailwind
└── postcss.config.js       # Configuração do PostCSS
```

## 🎨 Componentes

### AdSense Component
Componente reutilizável para exibir anúncios do Google AdSense:

```tsx
<AdSense 
  adSlot="1234567890"
  adFormat="auto"
  className="my-8"
/>
```

### Layout Component  
Layout responsivo com header, main e footer:

```tsx
<Layout title="Título da Página" description="Descrição SEO">
  {/* Conteúdo da página */}
</Layout>
```

## ⚙️ Configuração do AdSense

1. **Crie uma conta no Google AdSense**
2. **Adicione seu site e aguarde aprovação**
3. **Obtenha seu Publisher ID (ca-pub-xxxxxxxxx)**
4. **Configure no arquivo `.env.local`**
5. **Crie unidades de anúncio e use os slots nos componentes**

### Tipos de Anúncio Suportados

- **Banner responsivo** - `adFormat="auto"`
- **Retângulo** - `adFormat="rectangle"`
- **Banner horizontal** - `adFormat="