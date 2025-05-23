# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


# Implementação da Landing Page ABAKAXI (Estilo Lemonade)

Este guia contém instruções detalhadas para implementar a landing page do ABAKAXI com estilo visual idêntico ao site da Lemonade.

## Arquivos Incluídos

1. **abakaxi_lemonade_home.tsx** - Componente React da landing page completa
2. **abakaxi_lemonade_styles.css** - Estilos CSS personalizados
3. **tailwind.config.js** - Configuração do Tailwind CSS com cores do Lemonade
4. **lemonade_styles_guide.md** - Guia detalhado de estilos e padrões visuais

## Instruções de Implementação

### 1. Configuração do Tailwind CSS

1. Substitua seu arquivo `tailwind.config.js` atual pelo fornecido:
   ```bash
   cp tailwind.config.js /caminho/para/seu/projeto/tailwind.config.js
   ```

2. Certifique-se de que as dependências do Tailwind estão instaladas:
   ```bash
   npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
   # ou com pnpm
   pnpm add -D tailwindcss postcss autoprefixer tailwindcss-animate
   ```

### 2. Implementação da Home Page

1. Substitua o arquivo `Home.tsx` atual pelo `abakaxi_lemonade_home.tsx`:
   ```bash
   cp abakaxi_lemonade_home.tsx /caminho/para/seu/projeto/src/pages/Home.tsx
   ```

2. Certifique-se de que o React Router está instalado para os componentes de navegação:
   ```bash
   npm install react-router-dom
   # ou com pnpm
   pnpm add react-router-dom
   ```

### 3. Estilos CSS Personalizados

1. Adicione o arquivo CSS personalizado ao seu projeto:
   ```bash
   cp abakaxi_lemonade_styles.css /caminho/para/seu/projeto/src/styles/lemonade.css
   ```

2. Importe o arquivo CSS no seu `main.tsx` ou `App.tsx`:
   ```tsx
   import './styles/lemonade.css';
   ```

### 4. Configuração do index.css

Certifique-se de que seu arquivo `src/index.css` inclui as diretivas do Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 20%;
    
    --card: 0 0% 100%;
    --card-foreground: 0 0% 20%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 20%;
 
    --primary: 336 100% 50%;
    --primary-foreground: 0 0% 100%;
 
    --secondary: 0 0% 20%;
    --secondary-foreground: 0 0% 100%;
 
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
 
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 20%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 336 100% 50%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 0 0% 10%;
    --foreground: 0 0% 98%;
 
    --card: 0 0% 15%;
    --card-foreground: 0 0% 98%;
 
    --popover: 0 0% 15%;
    --popover-foreground: 0 0% 98%;
 
    --primary: 336 100% 50%;
    --primary-foreground: 0 0% 100%;
 
    --secondary: 0 0% 20%;
    --secondary-foreground: 0 0% 98%;
 
    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 63.9%;
 
    --accent: 0 0% 20%;
    --accent-foreground: 0 0% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
 
    --border: 0 0% 20%;
    --input: 0 0% 20%;
    --ring: 336 100% 50%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

/* Estilos personalizados para ABAKAXI */
.abakaxi-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.abakaxi-gradient {
  background: linear-gradient(135deg, #FF0066 0%, #FF4D8D 100%);
}

.abakaxi-shadow {
  box-shadow: 0 10px 25px -5px rgba(255, 0, 102, 0.1), 0 8px 10px -6px rgba(255, 77, 141, 0.1);
}
```

## Verificação e Testes

1. Execute seu projeto localmente:
   ```bash
   npm run dev
   # ou com pnpm
   pnpm dev
   ```

2. Acesse a página inicial e verifique se todos os elementos visuais estão corretos:
   - Cores rosa (#FF0066) nos botões e elementos de destaque
   - Tipografia e espaçamentos conforme o Lemonade
   - Layout responsivo em diferentes tamanhos de tela

## Personalizações Adicionais

Para personalizar ainda mais a landing page:

1. Consulte o arquivo `lemonade_styles_guide.md` para entender os padrões visuais
2. Ajuste as ilustrações e imagens conforme a identidade ABAKAXI
3. Modifique textos e conteúdos específicos mantendo a estrutura visual

## Próximos Passos

Após implementar a landing page, os próximos passos recomendados são:

1. Desenvolver o fluxo de onboarding/cotação conversacional
2. Implementar o dashboard do usuário
3. Integrar com backend quando disponível

## Suporte

Se encontrar problemas durante a implementação, verifique:

1. Se todas as dependências estão instaladas corretamente
2. Se os caminhos de importação estão corretos para seu projeto
3. Se o Tailwind CSS está configurado adequadamente

Para dúvidas adicionais, entre em contato com a equipe de desenvolvimento.
