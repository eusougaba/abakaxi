# Guia de Estilos Lemonade para ABAKAXI

Este guia detalha os elementos visuais e estruturais do site da Lemonade que devem ser aplicados à landing page do ABAKAXI para garantir máxima fidelidade visual.

## 1. Cores

### Paleta Principal
- **Cor Primária**: Rosa (#FF0066) - Usado em botões, estrelas, destaques
- **Cor de Fundo**: Branco (#FFFFFF) para seções principais
- **Cor de Fundo Alternativa**: Cinza muito claro (#F5F5F5) para seções alternadas
- **Cor de Texto**: Cinza escuro (#333333) para textos principais
- **Cor de Texto Secundária**: Cinza médio (#666666) para textos de suporte

### Aplicação de Cores
- **Botões Principais**: Fundo rosa (#FF0066) com texto branco
- **Botões Secundários**: Transparente com borda cinza e texto cinza escuro
- **Cards**: Fundo branco com sombra sutil
- **Rodapé de Cards**: Fundo rosa muito claro (#FFF0F5)
- **Estrelas de Avaliação**: Rosa (#FF0066)

## 2. Tipografia

### Fontes
- **Família Principal**: Sans-serif limpa (como Circular, Helvetica Neue ou Inter)
- **Pesos Utilizados**: Regular (400), Medium (500), Bold (700)

### Tamanhos
- **H1 (Título Principal)**: 48-64px (responsivo)
- **H2 (Títulos de Seção)**: 36-48px (responsivo)
- **H3 (Subtítulos)**: 24-30px
- **Corpo de Texto**: 16-18px
- **Texto Pequeno**: 14px
- **Botões**: 16px, maiúsculas

### Espaçamento de Texto
- **Altura de Linha**: 1.5 para corpo de texto, 1.2 para títulos
- **Espaçamento de Letras**: Normal, sem alterações significativas

## 3. Layout e Espaçamentos

### Containers
- **Largura Máxima**: 1200px (max-w-7xl no Tailwind)
- **Padding Horizontal**: 24px em mobile, 32px em tablet, 64px em desktop

### Espaçamentos Verticais
- **Entre Seções**: 80-120px (py-20 a py-32 no Tailwind)
- **Entre Elementos**: 24-48px (espaço entre título e subtítulo, por exemplo)
- **Padding Interno de Cards**: 24px (p-6 no Tailwind)

### Grid
- **Colunas**: 1 em mobile, 2-3 em tablet/desktop
- **Gap**: 32px (gap-8 no Tailwind)

## 4. Componentes

### Navegação
- **Altura**: 80px
- **Posição**: Fixa no topo (sticky)
- **Fundo**: Branco com sombra muito sutil
- **Links**: Espaçados uniformemente, sem sublinhado, hover em rosa

### Botões
- **Border Radius**: 4px (arredondamento sutil)
- **Padding**: 16px horizontal, 12px vertical (px-4 py-3 no Tailwind)
- **Transição**: 200ms para todas as propriedades
- **Efeito Hover**: Escurecimento sutil da cor e aumento da sombra
- **Texto**: Maiúsculas, peso médio ou bold

### Cards
- **Border Radius**: 8px (rounded-lg no Tailwind)
- **Sombra**: Sutil, aumenta no hover
- **Estrutura**: Conteúdo principal + rodapé com preço
- **Transição**: 200ms para todas as propriedades

### Estrelas de Avaliação
- **Tamanho**: Grande (64px em desktop)
- **Cor**: Rosa (#FF0066)
- **Alinhamento**: Centralizadas

## 5. Ilustrações e Ícones

### Estilo de Ilustração
- **Tipo**: Linha fina, minimalista, estilo "wireframe"
- **Espessura de Linha**: 2px
- **Cores**: Preto/cinza escuro para linhas
- **Preenchimento**: Geralmente sem preenchimento

### Ícones
- **Tamanho**: 24px para navegação e elementos de interface
- **Estilo**: Linha consistente com ilustrações
- **Alinhamento**: Centralizado com texto quando usado em conjunto

## 6. Animações e Transições

### Transições
- **Duração**: 200-300ms
- **Timing Function**: Ease-out
- **Propriedades**: Todas (all) ou específicas (color, background, transform)

### Animações de Entrada
- **Estilo**: Fade-in + slide-up sutil
- **Duração**: 1000ms
- **Delay**: Sequencial para elementos em série

### Hover States
- **Botões**: Escurecimento sutil + aumento de sombra
- **Cards**: Aumento de sombra + elevação sutil (transform: translateY(-2px))
- **Links**: Mudança de cor (para rosa)

## 7. Responsividade

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Adaptações
- **Navegação**: Colapsa para menu hambúrguer em mobile
- **Grid**: Reduz número de colunas em telas menores
- **Tamanho de Fonte**: Reduz proporcionalmente em telas menores
- **Espaçamentos**: Reduz em telas menores (60-70% do valor desktop)

## 8. Estrutura HTML

### Seções Principais
1. **Header/Navegação**
2. **Hero** com título, subtítulo e CTA principal
3. **Logos de Parceiros/Mídia**
4. **Avaliações** com estrelas e depoimentos
5. **Produtos** com cards e preços
6. **Benefícios** destacando diferenciais
7. **CTA Final**
8. **Rodapé** com links e informações legais

### Hierarquia de Elementos
- Títulos de seção sempre em h2
- Subtítulos em h3
- Uso consistente de divs para agrupamento
- Semântica correta (section, article, nav, etc.)
