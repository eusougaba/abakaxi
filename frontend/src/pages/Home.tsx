import React, { useState, useEffect } from "react";
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
              <span className="text-3xl font-bold text-pink-500">ABAKAXI</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/account" className="text-gray-700 hover:text-pink-500 border border-gray-300 rounded-md px-4 py-2">
                Minha Conta
              </Link>
              <Link to="/prices" className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 shadow-md hover:shadow-lg transition-all duration-200">
                VERIFICAR PREÇOS
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
              <Link to="/prices" className="bg-pink-500 text-white text-lg font-medium rounded-md px-8 py-4 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all duration-200">
                VERIFICAR NOSSOS PREÇOS
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
                    <Link to="/prices" className="bg-pink-500 text-white rounded-md px-6 py-3 font-medium hover:bg-pink-600 transition-all duration-200">
                      VERIFICAR PREÇOS
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
                    <Link to="/prices" className="bg-pink-500 text-white rounded-md px-6 py-3 font-medium hover:bg-pink-600 transition-all duration-200">
                      VERIFICAR PREÇOS
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
          
          <div className="text-center mb-16">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Maya, nosso charmoso bot de inteligência artificial, vai criar o seguro perfeito para você.
              Não poderia ser mais fácil ou rápido
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Em apenas</h3>
              <p className="text-4xl font-bold text-gray-800">90 segundos</p>
            </div>
            
            <div className="relative w-64 h-96 mx-8">
              <div className="absolute inset-0 border-4 border-gray-300 rounded-3xl"></div>
              <div className="absolute inset-x-0 top-0 h-6 bg-gray-300 rounded-t-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full space-y-4">
                  <div className="bg-gray-200 h-12 w-3/4 rounded-full"></div>
                  <div className="bg-gray-200 h-12 w-full rounded-full"></div>
                  <div className="flex justify-end">
                    <div className="bg-pink-500 text-white px-4 py-2 rounded-full">
                      Pronto.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3 Minutos</h3>
              <p className="text-4xl font-bold text-gray-800">Para ser pago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Switch Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            Já tem seguro? Nós ajudamos você a mudar!
          </h2>
          
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Pessoas deixaram estas seguradoras para se juntar à ABAKAXI:
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {[
              { name: "Assurante, Farmers, Homesite, Progressive, Stillwater e mais...", percentage: "31%" },
              { name: "Allstate", percentage: "19%" },
              { name: "State Farm", percentage: "16%" },
              { name: "Travelers", percentage: "14%" },
              { name: "Liberty Mutual", percentage: "10%" },
              { name: "Geico", percentage: "10%" }
            ].map((company, index) => (
              <div key={index} className="bg-white rounded-full py-4 px-8 shadow-md">
                <p className="text-center">
                  <span className="block text-3xl font-bold text-gray-800">{company.percentage}</span>
                  <span className="text-sm text-gray-600">{company.name}</span>
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link to="/switch" className="bg-pink-500 text-white rounded-md px-8 py-4 font-medium hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all duration-200">
              VERIFICAR PREÇOS E MUDAR
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            Como a ABAKAXI Funciona
          </h2>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              A ABAKAXI inverte o modelo tradicional de seguros. Tratamos os prêmios que você paga como se fossem seu dinheiro, não nosso. 
              Com a ABAKAXI, tudo se torna simples e transparente. Cobramos uma taxa fixa, pagamos sinistros super rápido, e 
              <Link to="/giveback" className="text-pink-500 hover:text-pink-600"> devolvemos </Link> 
              o que sobra para causas que você se importa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M30,50 L70,50 M50,30 L50,70" stroke="#333" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="10" fill="#FF0066"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Uma taxa fixa</h3>
              <p className="text-gray-700">para administrar tudo</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M30,50 C40,30 60,70 70,50" stroke="#333" strokeWidth="2"/>
                  <circle cx="30" cy="50" r="5" fill="#FF0066"/>
                  <circle cx="70" cy="50" r="5" fill="#FF0066"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pagamos sinistros</h3>
              <p className="text-gray-700">super rápido</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <path d="M50,30 L50,70 M30,50 L70,50" stroke="#333" strokeWidth="2"/>
                  <path d="M40,40 L60,60 M40,60 L60,40" stroke="#333" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="10" fill="#FF0066"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Se sobrar dinheiro,</h3>
              <p className="text-gray-700">devolvemos para causas</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "DirectRelief", "BornThisWay", "ToWriteLove", "Malala", "CharityWater", 
              "Cure", "NewStory", "AmericanForests", "RedCross", "TeachForAmerica",
              "350org", "ACLU", "MarchForOurLives", "TrevorProject"
            ].map((charity, index) => (
              <div key={index} className="text-gray-600 font-bold">
                {charity}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            * Sujeito à aprovação do conselho e ao cumprimento de certos padrões financeiros pela empresa. Esta seção não se aplica ao seguro de vida.
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#333">B-CORP</text>
                  <text x="50" y="70" textAnchor="middle" fontSize="12" fill="#333">Certified</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Projetada para Impacto Social</h3>
              <p className="text-gray-700">
                A ABAKAXI Inc. é uma Empresa de Benefício Público e certificada B-Corp. O impacto social faz parte da nossa missão legal e modelo de negócios - não apenas marketing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="30" y="30" width="40" height="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#333">NYSE</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">NYSE:ABKX</h3>
              <p className="text-gray-700">
                A ABAKAXI é uma empresa de capital aberto, listada na Bolsa de Valores de Nova York sob o símbolo ABKX
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" stroke="#333" strokeWidth="2" fill="none"/>
                  <text x="50" y="45" textAnchor="middle" fontSize="24" fill="#333">A</text>
                  <text x="50" y="65" textAnchor="middle" fontSize="12" fill="#333">EXCEPTIONAL</text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Classificação A e Respaldo de Gigantes</h3>
              <p className="text-gray-700">
                A ABAKAXI tem classificação A, é totalmente regulamentada e ressegurada pelos nomes mais confiáveis do planeta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LOCATÁRIOS</h3>
              <ul className="space-y-2">
                <li><Link to="/renters" className="text-gray-400 hover:text-pink-500">Seguro para Locatários</Link></li>
                <li><Link to="/explaining-renters" className="text-gray-400 hover:text-pink-500">Explicando Locatários</Link></li>
                <li><Link to="/what-is-renters" className="text-gray-400 hover:text-pink-500">O que é Seguro para Locatários</Link></li>
                <li><Link to="/renters-coverage" className="text-gray-400 hover:text-pink-500">Cobertura para Locatários</Link></li>
                <li><Link to="/renters-cost" className="text-gray-400 hover:text-pink-500">Custo do Seguro para Locatários</Link></li>
                <li><Link to="/how-to-get-renters" className="text-gray-400 hover:text-pink-500">Como Obter Seguro para Locatários</Link></li>
                <li><Link to="/car-renters-bundle" className="text-gray-400 hover:text-pink-500">Pacote Carro e Locatários</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">PROPRIETÁRIOS</h3>
              <ul className="space-y-2">
                <li><Link to="/homeowners" className="text-gray-400 hover:text-pink-500">Seguro Residencial</Link></li>
                <li><Link to="/explaining-homeowners" className="text-gray-400 hover:text-pink-500">Explicando Residencial</Link></li>
                <li><Link to="/what-is-homeowners" className="text-gray-400 hover:text-pink-500">O que é Seguro Residencial</Link></li>
                <li><Link to="/homeowners-coverage" className="text-gray-400 hover:text-pink-500">Cobertura Residencial</Link></li>
                <li><Link to="/homeowners-cost" className="text-gray-400 hover:text-pink-500">Custo do Seguro Residencial</Link></li>
                <li><Link to="/how-much-home-insurance" className="text-gray-400 hover:text-pink-500">Quanto Seguro Residencial Preciso</Link></li>
                <li><Link to="/car-home-bundle" className="text-gray-400 hover:text-pink-500">Pacote Carro e Residencial</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">AUTOMÓVEL</h3>
              <ul className="space-y-2">
                <li><Link to="/car" className="text-gray-400 hover:text-pink-500">Seguro de Automóvel</Link></li>
                <li><Link to="/explaining-car" className="text-gray-400 hover:text-pink-500">Explicando Automóvel</Link></li>
                <li><Link to="/pay-per-mile" className="text-gray-400 hover:text-pink-500">Seguro por Quilômetro</Link></li>
                <li><Link to="/car-coverage" className="text-gray-400 hover:text-pink-500">Cobertura de Automóvel</Link></li>
                <li><Link to="/car-cost" className="text-gray-400 hover:text-pink-500">Custo do Seguro de Automóvel</Link></li>
                <li><Link to="/comprehensive-car" className="text-gray-400 hover:text-pink-500">Seguro Compreensivo</Link></li>
                <li><Link to="/car-by-vehicle" className="text-gray-400 hover:text-pink-500">Seguro por Veículo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">PET</h3>
              <ul className="space-y-2">
                <li><Link to="/pet" className="text-gray-400 hover:text-pink-500">Seguro Pet</Link></li>
                <li><Link to="/explaining-pet" className="text-gray-400 hover:text-pink-500">Explicando Pet</Link></li>
                <li><Link to="/dog-insurance" className="text-gray-400 hover:text-pink-500">Seguro para Cães</Link></li>
                <li><Link to="/cat-insurance" className="text-gray-400 hover:text-pink-500">Seguro para Gatos</Link></li>
                <li><Link to="/compare-pet" className="text-gray-400 hover:text-pink-500">Comparar Seguro Pet</Link></li>
                <li><Link to="/pet-coverage" className="text-gray-400 hover:text-pink-500">Cobertura Pet</Link></li>
                <li><Link to="/pet-cost" className="text-gray-400 hover:text-pink-500">Custo do Seguro Pet</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">RECURSOS</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-400 hover:text-pink-500">Blog</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-pink-500">FAQ</Link></li>
                <li><Link to="/where-live" className="text-gray-400 hover:text-pink-500">Onde Estamos</Link></li>
                <li><Link to="/dictionary" className="text-gray-400 hover:text-pink-500">Dicionário de Seguros</Link></li>
                <li><Link to="/sitemap" className="text-gray-400 hover:text-pink-500">Mapa do Site</Link></li>
              </ul>
              
              <h3 className="text-lg font-bold mt-8 mb-4">EMPRESA</h3>
              <ul className="space-y-2">
                <li><Link to="/join" className="text-gray-400 hover:text-pink-500">Junte-se à Equipe</Link></li>
                <li><Link to="/partners" className="text-gray-400 hover:text-pink-500">Programa de Parceiros</Link></li>
                <li><Link to="/investors" className="text-gray-400 hover:text-pink-500">Relações com Investidores</Link></li>
                <li><Link to="/transparency" className="text-gray-400 hover:text-pink-500">Transparência</Link></li>
                <li><Link to="/reviews" className="text-gray-400 hover:text-pink-500">Avaliações</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2025 ABAKAXI Inc. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
