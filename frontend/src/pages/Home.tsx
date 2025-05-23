import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Shield, Home, Car, Heart, Star, ArrowRight, Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-50"></div>
        <div className="abakaxi-container relative pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-800">
                Esqueça tudo que você sabe sobre <span className="text-primary-500">seguros</span>
              </h1>
              <p className="text-xl text-neutral-600">
                Instantâneo. Preços incríveis. Experiência digital.
                Proteção completa para o que importa para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cotacao">
                  <Button variant="abakaxi-primary" size="lg" className="w-full sm:w-auto">
                    Cotar Agora
                  </Button>
                </Link>
                <Link to="/como-funciona">
                  <Button variant="abakaxi-outline" size="lg" className="w-full sm:w-auto">
                    Como Funciona
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600">
                    Mais de 10.000 clientes satisfeitos
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-200 rounded-full opacity-50 blur-3xl"></div>
              <div className="relative bg-white rounded-xl shadow-xl abakaxi-shadow p-6 transform rotate-3">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Seguro Residencial</h3>
                    <p className="text-neutral-600">A partir de R$10/mês</p>
                  </div>
                </div>
                <div className="h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <Home className="w-16 h-16 text-neutral-400" />
                </div>
                <Button variant="abakaxi-primary" className="w-full">Ver Detalhes</Button>
              </div>
              <div className="relative bg-white rounded-xl shadow-xl abakaxi-shadow p-6 transform -rotate-3 -mt-12 ml-12">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Seguro para Locatários</h3>
                    <p className="text-neutral-600">A partir de R$5/mês</p>
                  </div>
                </div>
                <div className="h-40 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center">
                  <Car className="w-16 h-16 text-neutral-400" />
                </div>
                <Button variant="abakaxi-secondary" className="w-full">Ver Detalhes</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="abakaxi-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a ABAKAXI?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Reimaginamos seguros do zero para torná-los simples, instantâneos e focados em você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Digital",
                description: "Contrate, gerencie e acione seu seguro diretamente pelo seu celular ou computador.",
                icon: <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              },
              {
                title: "Preços Acessíveis",
                description: "Assinatura mensal sem fidelidade, com preços a partir de R$5 por mês.",
                icon: <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              },
              {
                title: "Pagamento Instantâneo",
                description: "Receba o pagamento de sinistros em segundos, não em semanas ou meses.",
                icon: <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-neutral-50">
        <div className="abakaxi-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Proteção completa para o que importa para você, com coberturas personalizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Seguro Residencial",
                description: "Proteção completa para sua casa e seus bens, incluindo cobertura contra roubo, incêndio, danos elétricos e muito mais.",
                price: "A partir de R$10/mês",
                icon: <Home className="w-8 h-8 text-primary-500" />,
                color: "primary"
              },
              {
                title: "Seguro para Locatários",
                description: "Proteção para seus pertences em imóveis alugados, com cobertura de responsabilidade civil e danos ao imóvel.",
                price: "A partir de R$5/mês",
                icon: <Shield className="w-8 h-8 text-secondary-500" />,
                color: "secondary"
              }
            ].map((product, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-${product.color}-50 rounded-t-lg`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-${product.color}-100 flex items-center justify-center`}>
                        {product.icon}
                      </div>
                      <div>
                        <CardTitle>{product.title}</CardTitle>
                        <p className="text-sm text-neutral-600">{product.price}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-neutral-600 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {[
                      "Contratação 100% digital",
                      "Cobertura instantânea",
                      "Personalização de coberturas",
                      "Pagamento mensal sem fidelidade"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={`/produtos/${product.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                    <Button variant={`abakaxi-${product.color}`} className="w-full">
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="abakaxi-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Milhares de pessoas já confiam na ABAKAXI para proteger o que importa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ana Silva",
                role: "Cliente Seguro Residencial",
                content: "Processo super simples e rápido. Consegui contratar meu seguro em menos de 5 minutos e o preço é muito melhor que o das seguradoras tradicionais.",
                avatar: "AS"
              },
              {
                name: "Carlos Oliveira",
                role: "Cliente Seguro para Locatários",
                content: "Tive um vazamento no apartamento que alugo e a ABAKAXI resolveu tudo em tempo recorde. O pagamento caiu na minha conta em menos de 24 horas!",
                avatar: "CO"
              },
              {
                name: "Mariana Costa",
                role: "Cliente Seguro Residencial",
                content: "A transparência é o que mais me impressiona. Sei exatamente o que está coberto, quanto custa e não tem letras miúdas. Recomendo a todos!",
                avatar: "MC"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
                    ))}
                  </div>
                  <p className="text-neutral-600">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-400 to-secondary-500 text-white">
        <div className="abakaxi-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para proteger o que importa?</h2>
            <p className="text-xl mb-8">
              Contrate seu seguro em minutos e tenha a tranquilidade de estar protegido pela ABAKAXI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cotacao">
                <Button variant="default" size="lg" className="bg-white text-primary-500 hover:bg-neutral-100 w-full sm:w-auto">
                  Cotar Agora
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
