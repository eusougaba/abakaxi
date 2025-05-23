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
              <Link to="/locatarios" className="text-gray-700 hover:text-yellow-400 font-medium">Locatários</Link>
              <Link to="/proprietarios" className="text-gray-700 hover:text-yellow-400 font-medium">Proprietários</Link>
              <Link to="/automovel" className="text-gray-700 hover:text-yellow-400 font-medium">Automóvel</Link>
              <Link to="/pet" className="text-gray-700 hover:text-yellow-400 font-medium">Pet</Link>
              <Link to="/vida" className="text-gray-700 hover:text-yellow-400 font-medium">Vida</Link>
              <Link to="/retorno" className="text-gray-700 hover:text-yellow-400 font-medium">Retorno</Link>
            </div>
            
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#FFDE59"/>
                  <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" fill="#FFFFFF"/>
                  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#FFDE59"/>
                </svg>
                <span className="text-3xl font-bold text-yellow-400">ABAKAXI</span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/conta" className="text-gray-700 hover:text-yellow-400 border border-gray-300 rounded-md px-4 py-2">
                Minha Conta
              </Link>
              <Link to="/precos" className="bg-yellow-400 text-gray-800 rounded-md px-4 py-2 hover:bg-yellow-500 shadow-md hover:shadow-lg transition-all duration-200 font-medium">
                VERIFICAR PREÇOS
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center">
              <img 
                src="/abacaxi-logo.svg" 
                alt="ABAKAXI Logo" 
                className="h-16 mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
                Esqueça tudo o que você sabia sobre seguros
              </h1>
              <p className="text-xl text-center text-gray-600 mb-8">
                Simples. Rápido. Justo.
              </p>
              <button className="bg-yellow-400 text-gray-800 text-lg font-medium rounded-md px-8 py-4 hover:bg-yellow-500 shadow-lg hover:shadow-xl transition-all duration-200">
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
        
        {/* Ilustrações de linha */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 w-1/3">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 L150,250 L200,200 L250,250 L350,250" stroke="#333" strokeWidth="1" fill="none"/>
              <rect x="100" y="150" width="200" height="100" stroke="#333" strokeWidth="1" fill="none"/>
              <circle cx="200" cy="120" r="30" stroke="#333" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,250 L150,250 L200,200 L250,250 L350,250" stroke="#333" strokeWidth="1" fill="none"/>
              <circle cx="150" cy="200" r="20" stroke="#333" strokeWidth="1" fill="none"/>
              <rect x="200" y="150" width="100" height="50" stroke="#333" strokeWidth="1" fill="none"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 5 Star Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            A Seguradora 5 Estrelas
          </h2>
          
          <div className="flex justify-center mb-12">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 font-bold mr-4">
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

      {/* Produtos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
            Seguros Simples, Rápidos e Acessíveis
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-12">
            Digitais Nativos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: "Locatários",
                description: "Cobertura para seus pertences",
                icon: (
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="20" width="32" height="20" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="14" y="26" width="6" height="6" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="28" y="26" width="6" height="6" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$5/mês"
              },
              {
                title: "Proprietários",
                description: "Proteção para sua casa",
                icon: (
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8,28 L24,12 L40,28" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="14" y="28" width="20" height="12" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="20" y="32" width="8" height="8" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$25/mês"
              },
              {
                title: "Automóvel",
                description: "Proteção para seu carro",
                icon: (
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8,28 C8,24 40,24 40,28" stroke="#333" strokeWidth="2" fill="none"/>
                    <rect x="12" y="28" width="24" height="8" rx="2" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="36" r="3" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="32" cy="36" r="3" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$30/mês"
              },
              {
                title: "Pet",
                description: "Saúde para seu pet",
                icon: (
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="20" r="5" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="20" cy="24" r="7" stroke="#333" strokeWidth="2" fill="none"/>
                    <path d="M14,32 C14,36 34,36 34,28" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$10/mês"
              },
              {
                title: "Vida",
                description: "Proteção para sua família",
                icon: (
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16" y="16" width="16" height="16" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="21" cy="21" r="2" stroke="#333" strokeWidth="2" fill="none"/>
                    <circle cx="27" cy="21" r="2" stroke="#333" strokeWidth="2" fill="none"/>
                    <path d="M20,28 C22,30 26,30 28,28" stroke="#333" strokeWidth="2" fill="none"/>
                  </svg>
                ),
                price: "A partir de R$8/mês"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg">
                <div className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-bold text-center text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-center text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-center">
                    <button className="bg-yellow-400 text-gray-800 rounded-md px-4 py-2 text-sm font-medium hover:bg-yellow-500 transition-all duration-200">
                      SAIBA MAIS
                    </button>
                  </div>
                </div>
                <div className="bg-yellow-50 py-2 text-center">
                  <p className="text-gray-600 text-sm">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Como Funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Simples de Contratar",
                description: "Responda algumas perguntas simples e tenha seu seguro em minutos, sem burocracia.",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Rápido nos Pagamentos",
                description: "Sinistros aprovados em segundos e pagos instantaneamente. Sem espera, sem estresse.",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                title: "Justo nos Preços",
                description: "Preços acessíveis e transparentes. Sem taxas escondidas, sem surpresas desagradáveis.",
                icon: (
                  <svg className="w-16 h-16 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button className="bg-pink-500 text-white text-lg font-medium rounded-md px-8 py-4 hover:bg-pink-600 shadow-lg hover:shadow-xl transition-all duration-200">
              VEJA COMO FUNCIONA
            </button>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Benefícios ABAKAXI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Atendimento 24/7",
                description: "Suporte disponível a qualquer hora, qualquer dia, para ajudar quando você mais precisa.",
                icon: (
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                )
              },
              {
                title: "Cobertura Completa",
                description: "Proteção abrangente para tudo o que importa, sem lacunas ou exclusões obscuras.",
                icon: (
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "100% Digital",
                description: "Gerencie tudo pelo app ou site, sem papelada, sem burocracia, sem complicações.",
                icon: (
                  <svg className="w-12 h-12 mx-auto text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
            Pronto para um seguro melhor?
          </h2>
          <p className="text-xl mb-8 text-gray-800 max-w-3xl mx-auto">
            Junte-se a milhares de brasileiros que já descobriram um jeito melhor de se proteger.
          </p>
          <button className="bg-gray-800 text-white text-lg font-bold rounded-md px-8 py-4 hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-200">
            COMECE AGORA
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><Link to="/locatarios" className="text-gray-300 hover:text-white">Locatários</Link></li>
                <li><Link to="/proprietarios" className="text-gray-300 hover:text-white">Proprietários</Link></li>
                <li><Link to="/automovel" className="text-gray-300 hover:text-white">Automóvel</Link></li>
                <li><Link to="/pet" className="text-gray-300 hover:text-white">Pet</Link></li>
                <li><Link to="/vida" className="text-gray-300 hover:text-white">Vida</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link to="/sobre" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
                <li><Link to="/carreiras" className="text-gray-300 hover:text-white">Carreiras</Link></li>
                <li><Link to="/imprensa" className="text-gray-300 hover:text-white">Imprensa</Link></li>
                <li><Link to="/retorno" className="text-gray-300 hover:text-white">Programa de Retorno</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white">Perguntas Frequentes</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link to="/ajuda" className="text-gray-300 hover:text-white">Central de Ajuda</Link></li>
                <li><Link to="/contato" className="text-gray-300 hover:text-white">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/termos" className="text-gray-300 hover:text-white">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="text-gray-300 hover:text-white">Política de Privacidade</Link></li>
                <li><Link to="/licencas" className="text-gray-300 hover:text-white">Licenças</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#FFDE59"/>
                  <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" fill="#FFFFFF"/>
                  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#FFDE59"/>
                </svg>
                <span className="text-xl font-bold text-yellow-400">ABAKAXI</span>
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
