import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  // Estado para controlar animações
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para ativar animações após carregamento da página
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de navegação fixa */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-6">
              <Link to="/renters" className="text-gray-700 hover:text-pink-500 font-medium">Locatários</Link>
              <Link to="/homeowners" className="text-gray-700 hover:text-pink-500 font-medium">Proprietários</Link>
              <Link to="/car" className="text-gray-700 hover:text-pink-500 font-medium">Automóvel</Link>
              <Link to="/pet" className="text-gray-700 hover:text-pink-500 font-medium">Pet</Link>
              <Link to="/life" className="text-gray-700 hover:text-pink-500 font-medium">Vida</Link>
              <Link to="/giveback" className="text-gray-700 hover:text-pink-500 font-medium">Retorno</Link>
            </div>
            
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#FF0066"/>
                  <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" fill="#FFFFFF"/>
                  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#FF0066"/>
                </svg>
                <span className="text-3xl font-bold text-pink-500">ABAKAXI</span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/account" className="text-gray-700 hover:text-pink-500 border border-gray-300 rounded-md px-4 py-2">
                Minha Conta
              </Link>
              <Link to="/prices" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 shadow-md hover:shadow-lg transition-all duration-200 font-medium uppercase">
                Verificar Preços
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6">
              Esqueça tudo que você sabe sobre seguros
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Instantâneo. Preços incríveis. Grande coração.
            </p>
            <div className="flex justify-center">
              <Link to="/prices" className="bg-pink-500 text-white text-lg font-medium rounded-md px-8 py-4 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all duration-200 uppercase">
                Verificar Nossos Preços
              </Link>
            </div>
          </div>
        </div>
        
        {/* Ilustração de fundo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FF0066" d="M37.5,-48.1C52.1,-40.8,69.7,-34.6,75.9,-22.7C82.2,-10.8,77.2,6.7,69.8,21.2C62.4,35.7,52.6,47.2,40.1,53.6C27.6,60,13.8,61.3,0.2,61C-13.4,60.7,-26.9,58.8,-39.8,52.5C-52.8,46.2,-65.3,35.5,-70.1,21.8C-74.9,8.1,-72,-8.6,-65.8,-22.5C-59.6,-36.4,-50.1,-47.4,-38.4,-55.3C-26.7,-63.2,-13.4,-68,-1.2,-66.4C11,-64.8,22,-55.5,37.5,-48.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FF0066" d="M48.2,-46.1C58.3,-39.2,59.7,-19.6,57.7,-2.1C55.6,15.5,50.1,31,39.7,42.7C29.3,54.4,14.7,62.3,-1.9,64.2C-18.5,66.1,-37,62,-48.3,50.4C-59.6,38.8,-63.8,19.4,-62.5,1.3C-61.3,-16.8,-54.6,-33.6,-43.1,-40.5C-31.6,-47.4,-15.8,-44.4,1.9,-46.3C19.6,-48.2,38.1,-53,48.2,-46.1Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        {/* Ilustrações de linha */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-1/3">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 L150,250 L200,200 L250,250 L350,250" stroke="#333" strokeWidth="2" fill="none"/>
              <rect x="100" y="150" width="200" height="100" stroke="#333" strokeWidth="2" fill="none"/>
              <circle cx="200" cy="120" r="30" stroke="#333" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 L150,250 L200,200 L250,250 L350,250" stroke="#333" strokeWidth="2" fill="none"/>
              <circle cx="150" cy="200" r="20" stroke="#333" strokeWidth="2" fill="none"/>
              <rect x="200" y="150" width="100" height="50" stroke="#333" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
        
        {/* Logos de parceiros/mídia */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-6 gap-8 opacity-50">
            {['FORTUNE', 'FORBES', 'WALL STREET JOURNAL', 'FINANCIAL TIMES', 'ECONOMIST', 'TECHCRUNCH'].map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <span className="text-gray-500 font-serif font-bold text-sm">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Star Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            A (Quase) 5 Estrelas Seguradora
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            ABAKAXI conquistou 4.9 estrelas na App Store, e também é bem avaliada pelo Reclame Aqui, Consumidor.gov e outros
          </p>
          
          <div className="flex justify-center mb-16">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-16 h-16 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Bruno Silva",
                username: "brunosilva",
                content: "Foi o seguro mais simples e fácil que já contratei, as seguradoras 'antigas' precisam entrar no século 21!!! 👍 👍 👍",
                avatar: "BS"
              },
              {
                name: "Valeria Delgado",
                username: "valeriad90",
                content: "Por que nem todo mundo usa o @ABAKAXI_Inc para seguro? Acabei de mudar e economizei R$110 #Vencendo",
                avatar: "VD"
              },
              {
                name: "Stephen Huber",
                username: "stephen_huber",
                content: "Uau. Acabei de registrar um sinistro com @ABAKAXI_Inc e fui pago em literalmente 7 segundos. Se você aluga ou tem uma casa, PRECISA contratar este seguro. #seguro #abakaxi #NãoÉUmAnúncio",
                avatar: "SH"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-500">@{testimonial.username}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Preços Incríveis. Assinatura Mensal.
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Descontos em Pacotes.
          </h3>
          
          <div className="flex justify-center items-center mb-16">
            <svg className="w-8 h-8 text-pink-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            <p className="text-xl text-gray-700">Economias incríveis quando você faz pacotes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Locatários",
                description: "Cobertura para seus pertences, dentro e fora da sua casa",
                icon: (
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="60" height="50" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="30" y="40" width="10" height="10" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="60" y="40" width="10" height="10" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="40" y="60" width="20" height="20" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$5/mês"
              },
              {
                title: "Proprietários",
                description: "Proteção para sua casa e pertences",
                icon: (
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,60 L50,30 L80,60" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="30" y="60" width="40" height="25" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="45" y="70" width="10" height="15" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$25/mês"
              },
              {
                title: "Automóvel",
                description: "Proteja seu carro, passageiros e o planeta",
                icon: (
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,60 C20,50 80,50 80,60" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="25" y="60" width="50" height="15" rx="5" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="35" cy="75" r="5" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="65" cy="75" r="5" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$30/mês"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto mb-6">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-center text-gray-600 mb-6">{product.description}</p>
                  <div className="flex justify-center">
                    <Link to="/prices" className="bg-pink-500 text-white rounded-md px-6 py-3 font-medium hover:bg-pink-600 transition-all duration-200 uppercase">
                      Verificar Preços
                    </Link>
                  </div>
                </div>
                <div className="bg-pink-50 py-3 text-center">
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pet",
                description: "Seguro saúde para membros peludos da família",
                icon: (
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="40" r="10" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="40" cy="50" r="15" stroke="#333" strokeWidth="2" fill="none"/>
                    <path d="M30,65 C30,75 70,75 70,55" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$10/mês"
              },
              {
                title: "Vida",
                description: "Protegendo as pessoas que você ama",
                icon: (
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="30" width="40" height="40" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="45" cy="45" r="5" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="55" cy="45" r="5" stroke="#333" strokeWidth="2" fill="none"/>
                    <path d="M40,60 C45,65 55,65 60,60" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$8/mês"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto mb-6">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-center text-gray-600 mb-6">{product.description}</p>
                  <div className="flex justify-center">
                    <Link to="/prices" className="bg-pink-500 text-white rounded-md px-6 py-3 font-medium hover:bg-pink-600 transition-all duration-200 uppercase">
                      Verificar Preços
                    </Link>
                  </div>
                </div>
                <div className="bg-pink-50 py-3 text-center">
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Everything Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Instantâneo em Tudo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative mx-auto w-64 h-128 border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-white">
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="absolute top-6 inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="mt-4 text-xl font-bold">Sinistro Aprovado</p>
                      <p className="mt-2 text-gray-600">Pagamento em 3 segundos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Sinistros pagos em segundos, não semanas
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Nossa tecnologia de IA aprova 30% dos sinistros instantaneamente e transfere o dinheiro na hora. Sem papelada, sem espera.
              </p>
              
              <div className="space-y-6">
                {[
                  { time: "3 segundos", action: "Pagamento mais rápido" },
                  { time: "3 minutos", action: "Tempo médio para registrar um sinistro" },
                  { time: "2 dias", action: "Tempo médio para resolução completa" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-16 text-right mr-4">
                      <span className="font-bold text-pink-500">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Already Insured Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
            Já tem seguro?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            80% dos clientes ABAKAXI vieram de outras seguradoras
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "2 minutos",
                description: "para fazer a troca para a ABAKAXI"
              },
              {
                stat: "80%",
                description: "dos clientes economizam ao mudar"
              },
              {
                stat: "R$110",
                description: "economia média anual"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="text-4xl font-bold text-pink-500 mb-4">{item.stat}</div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Como Funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-12">
                {[
                  {
                    title: "Você paga seu prêmio mensal",
                    description: "Sua assinatura mensal vai para um fundo comum com outros clientes similares."
                  },
                  {
                    title: "Nós pagamos sinistros rapidamente",
                    description: "Quando alguém tem um sinistro, pagamos instantaneamente do fundo comum."
                  },
                  {
                    title: "Sobras vão para causas sociais",
                    description: "No final do ano, o dinheiro não usado para sinistros vai para causas que você escolher."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <svg className="w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="150" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M200,50 C200,50 300,125 300,200 C300,275 200,350 200,350 C200,350 100,275 100,200 C100,125 200,50 200,50 Z" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="200" cy="125" r="25" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="200" cy="275" r="25" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="125" cy="200" r="25" stroke="#333" strokeWidth="2" fill="none" />
                <circle cx="275" cy="200" r="25" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M175,125 L225,125" stroke="#333" strokeWidth="2" />
                <path d="M175,275 L225,275" stroke="#333" strokeWidth="2" />
                <path d="M125,175 L125,225" stroke="#333" strokeWidth="2" />
                <path d="M275,175 L275,225" stroke="#333" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Seguradora Licenciada",
                description: "Somos uma seguradora licenciada, não apenas um corretor. Isso significa que podemos oferecer preços melhores e processar sinistros mais rapidamente."
              },
              {
                title: "Ressegurada por Gigantes",
                description: "Nossas apólices são resseguradas por algumas das maiores resseguradoras do mundo, garantindo que possamos pagar sinistros de qualquer tamanho."
              },
              {
                title: "Avaliada em R$ 2 Bilhões",
                description: "Somos uma das insurtechs mais bem avaliadas do mundo, com investidores de primeira linha e capital para crescer e inovar."
              }
            ].map((credential, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{credential.title}</h3>
                <p className="text-gray-600">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Pronto para um seguro melhor?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Junte-se a milhares de brasileiros que já descobriram um jeito melhor de se proteger.
          </p>
          <Link to="/prices" className="inline-block bg-white text-pink-500 text-lg font-bold rounded-md px-8 py-4 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 uppercase">
            Verificar Preços Agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><Link to="/renters" className="text-gray-300 hover:text-white">Locatários</Link></li>
                <li><Link to="/homeowners" className="text-gray-300 hover:text-white">Proprietários</Link></li>
                <li><Link to="/car" className="text-gray-300 hover:text-white">Automóvel</Link></li>
                <li><Link to="/pet" className="text-gray-300 hover:text-white">Pet</Link></li>
                <li><Link to="/life" className="text-gray-300 hover:text-white">Vida</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white">Carreiras</Link></li>
                <li><Link to="/press" className="text-gray-300 hover:text-white">Imprensa</Link></li>
                <li><Link to="/giveback" className="text-gray-300 hover:text-white">Programa de Retorno</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white">Perguntas Frequentes</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white">Central de Ajuda</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Termos de Uso</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Política de Privacidade</Link></li>
                <li><Link to="/licenses" className="text-gray-300 hover:text-white">Licenças</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#FF0066"/>
                  <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" fill="#FFFFFF"/>
                  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#FF0066"/>
                </svg>
                <span className="text-xl font-bold">ABAKAXI</span>
              </Link>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ABAKAXI Seguros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
