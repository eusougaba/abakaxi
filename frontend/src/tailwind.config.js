/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}',
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          // Cores principais da ABAKAXI
          primary: {
            DEFAULT: "#FFDE59", // Amarelo ABAKAXI
            foreground: "#333333", // Texto sobre o amarelo
            50: "#FFFBEB",
            100: "#FFF6D6",
            200: "#FFEDA3",
            300: "#FFE47A",
            400: "#FFDE59", // Cor principal
            500: "#FFD426",
            600: "#EBBD00",
            700: "#C29A00",
            800: "#9A7A00",
            900: "#725A00",
          },
          // Cores secundárias
          secondary: {
            DEFAULT: "#FF4D8D", // Rosa ABAKAXI
            foreground: "#FFFFFF", // Texto sobre o rosa
            50: "#FFF0F5",
            100: "#FFE1EC",
            200: "#FFC3D9",
            300: "#FFA5C6",
            400: "#FF87B3",
            500: "#FF4D8D", // Cor secundária
            600: "#FF1A6A",
            700: "#E6004F",
            800: "#B3003E",
            900: "#80002C",
          },
          // Cores neutras
          neutral: {
            DEFAULT: "#333333", // Cinza escuro para textos
            50: "#F9F9F9",
            100: "#F2F2F2",
            200: "#E6E6E6",
            300: "#CCCCCC",
            400: "#999999",
            500: "#666666",
            600: "#4D4D4D",
            700: "#333333", // Cor padrão para textos
            800: "#1A1A1A",
            900: "#0D0D0D",
          },
          // Cores de estado
          success: "#22C55E", // Verde para sucesso
          warning: "#F59E0B", // Laranja para avisos
          error: "#EF4444",   // Vermelho para erros
          info: "#3B82F6",    // Azul para informações
          
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  