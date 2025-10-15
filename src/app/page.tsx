import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Fixed Action Buttons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <a href="https://wa.me/916369366250" target="_blank" rel="noopener noreferrer"
           className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg transition-all hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a href="https://telegram.me/Thecryptoape" target="_blank" rel="noopener noreferrer"
           className="w-14 h-14 rounded-full bg-[#2AABEE] hover:bg-[#229ED9] flex items-center justify-center text-white shadow-lg transition-all hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </a>
        <a href="tel:+916369366250"
           className="w-14 h-14 rounded-full bg-[#e91e63] hover:bg-[#c2185b] flex items-center justify-center text-white shadow-lg transition-all hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
        <a href="mailto:info@thecryptoape.com"
           className="w-14 h-14 rounded-full bg-[#ff4081] hover:bg-[#f50057] flex items-center justify-center text-white shadow-lg transition-all hover:scale-110">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="https://ext.same-assets.com/409122903/4249360107.ico" alt="CryptoApe" width={40} height={40} />
            <span className="text-2xl font-bold text-[#2fa1c9]">CryptoApe</span>
          </div>
          <button className="text-gray-700">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        {/* Animated Dots Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-pulse-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Blockchain<br />
              Development Company
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At CryptoApe, we craft cutting-edge blockchain, AI, Web3, and fintech solutions that help businesses scale faster, trade smarter, and innovate fearlessly. From cryptocurrency exchanges to metaverse ecosystems — we make your boldest ideas a reality.
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="https://ext.same-assets.com/409122903/2391876798.jpeg"
                alt="WEB3 Globe"
                fill
                className="object-contain animate-rotate-slow"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold drop-shadow-lg">WEB3</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 text-xl font-semibold text-white bg-cyan-500 px-6 py-3 rounded-lg shadow-lg">
              Web 3.0 Development
            </div>
          </div>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto relative">
          {/* Center Icon */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 rounded-full border-4 border-cyan-400 bg-white shadow-xl flex items-center justify-center">
              <Image src="https://ext.same-assets.com/409122903/4249360107.ico" alt="Center" width={60} height={60} />
            </div>
          </div>

          {/* Service Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { img: "https://ext.same-assets.com/409122903/1223065678.png", label: "Metaverse Development" },
              { img: "https://ext.same-assets.com/409122903/409122903.png", label: "AI Development" },
              { img: "https://ext.same-assets.com/409122903/1319053319.png", label: "Web 3.0 Development" },
              { img: "https://ext.same-assets.com/409122903/2026362493.jpeg", label: "DEFI Development" },
              { img: "https://ext.same-assets.com/409122903/3178883711.png", label: "Game Development" },
              { img: "https://ext.same-assets.com/409122903/1538307622.png", label: "Crypto Development" },
              { img: "https://ext.same-assets.com/409122903/1806632012.png", label: "NFT Development" },
              { img: "https://ext.same-assets.com/409122903/4038037397.png", label: "Enterprise Development" },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-cyan-300 bg-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 mb-3">
                  <Image src={service.img} alt={service.label} width={48} height={48} className="object-contain" />
                </div>
                <p className="text-sm font-medium text-gray-700 max-w-[120px]">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Where We Make an Impact
          </h2>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/1274736410.png" alt="Private Blockchain" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Private Blockchain Development</h3>
                <p className="text-gray-600 text-sm">Private blockchain development builds secure, permissioned networks where only authorized participants can access, validate, and manage data efficiently.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/3584434846.png" alt="Blockchain Consulting" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Blockchain Consulting</h3>
                <p className="text-gray-600 text-sm">Blockchain consulting guides businesses in the strategy, design, and implementation of secure, scalable blockchain solutions to drive growth and innovation.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/2118777455.png" alt="DeFi & Web3" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">DeFi & Web3 Applications</h3>
                <p className="text-gray-600 text-sm">DeFi & Web3 application development empowers businesses with decentralized, transparent, and user-driven solutions for the future of digital finance and the web.</p>
              </div>
            </div>

            {/* Center - Large Icon */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image src="https://ext.same-assets.com/409122903/2915311363.png" alt="Center Impact" width={300} height={300} className="animate-float" />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/4038037397.png" alt="Public Blockchain" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Public Blockchain Development</h3>
                <p className="text-gray-600 text-sm">Public Blockchain Development creates open, decentralized networks where anyone can access, validate, and transact with full transparency and security.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/1806632012.png" alt="Enterprise" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">Enterprise Blockchain Development</h3>
                <p className="text-gray-600 text-sm">Enterprise Blockchain Development builds secure, scalable, and customizable blockchain solutions tailored to streamline business operations and drive efficiency.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <Image src="https://ext.same-assets.com/409122903/1401268523.png" alt="AI-Powered" width={64} height={64} className="mb-4" />
                <h3 className="text-xl font-bold mb-3">AI-Powered Blockchain Development</h3>
                <p className="text-gray-600 text-sm">AI-powered blockchain development combines artificial intelligence with blockchain to deliver smarter, secure, automated, and future-ready business solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Image src="https://ext.same-assets.com/409122903/1401268523.png" alt="AI" width={80} height={80} className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-cyan-500">AI Powered Innovation</span> in Blockchain
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">AI-Based Security Protocols</h3>
              <p className="text-gray-600">Anomaly detection, fraud alerts, and identity verification with machine learning.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">AI-Enhanced Crypto Exchange</h3>
              <p className="text-gray-600">Personalized trading suggestions, chatbots for support, and KYC automation.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Autonomous DAO Management</h3>
              <p className="text-gray-600">Use AI to make smarter governance decisions and automate DAO proposals.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">AI-Powered Smart Contracts</h3>
              <p className="text-cyan-50">Self-optimizing contracts that adapt and detect fraud in real-time.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4">Predictive Analytics for DeFi</h3>
              <p className="text-gray-600">AI models that forecast trading behavior, token trends, and liquidity risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why use AI in Blockchain Development
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Low Operational Costs",
              "Personalize user experience",
              "Predict risk Before they happen",
              "Automate decision-making",
              "Improve security & compliance"
            ].map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:scale-105">
                <h3 className="text-base font-bold text-gray-800">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://ext.same-assets.com/409122903/3947927919.gif" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Your Blockchain Journey Starts With CryptoApe
          </h2>
          <button className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We specialize in
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Fintech", img: "https://ext.same-assets.com/409122903/540454977.webp" },
              { name: "Artificial Intelligence", img: "https://ext.same-assets.com/409122903/528341413.webp" },
              { name: "eCommerce & Retail", img: "https://ext.same-assets.com/409122903/35798284.webp" },
              { name: "Gaming", img: "https://ext.same-assets.com/409122903/3985973053.webp" },
              { name: "Healthcare", img: "https://ext.same-assets.com/409122903/3881838367.webp" },
              { name: "Metaverse", img: "https://ext.same-assets.com/409122903/4137848943.webp" },
              { name: "Education", img: "https://ext.same-assets.com/409122903/1596248795.webp" },
              { name: "Logistics", img: "https://ext.same-assets.com/409122903/989399582.webp" },
            ].map((industry, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
                <Image src={industry.img} alt={industry.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Image src="https://ext.same-assets.com/409122903/3947927919.gif" alt="Reviews" width={100} height={100} className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Reviews That Highlight Our True Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                logo: "https://ext.same-assets.com/409122903/2135490664.png",
                name: "CLEPX",
                title: "INITIAL COIN OFFERING (ICO) PLATFORM TO RAISE CAPITAL FOR OUR OWN START-UP",
                review: "CryptoApe listened to my project needs and created & maintained my Website, Apps in a timely reasonable manner. I would highly recommend them to anyone."
              },
              {
                logo: "https://ext.same-assets.com/409122903/3722031134.png",
                name: "OKEPAY",
                title: "CRYPTO PAYMENT GATEWAY PLATFORM TO ACCEPT CRYPTO PAYMENTS",
                review: "CryptoApe took our project, they worked tirelessly and always with great energy. My crypto payments platform came out better than I imagined - I wish I found them one year ago!"
              },
              {
                logo: "https://ext.same-assets.com/409122903/2118341798.png",
                name: "Moo ICO",
                title: "",
                review: "Working with CryptoApe on Moo ICO gave our project the confidence to scale globally. Their solution offered flawless token distribution, real-time tracking, and advanced compliance tools."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all relative">
                <Image src={review.logo} alt={review.name} width={120} height={40} className="mb-4 object-contain h-10" />
                <h3 className="font-bold text-lg mb-2">{review.name}</h3>
                {review.title && <p className="text-xs text-gray-500 uppercase mb-4">{review.title}</p>}
                <p className="text-gray-600 text-sm leading-relaxed">{review.review}</p>
                <div className="absolute top-6 right-6">
                  <svg className="w-8 h-8 text-cyan-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-8 px-6 md:px-12 border-t">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="https://ext.same-assets.com/409122903/4249360107.ico" alt="CryptoApe" width={40} height={40} />
              <span className="text-2xl font-bold text-[#2fa1c9]">CryptoApe</span>
            </div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-600 mb-6">
              CryptoApe is an exclusive blockchain and cryptocurrency development company that offers instant and complete crypto solutions to kickstart your business.
            </p>
            <h3 className="font-bold mb-4">Contact us</h3>
            <div className="space-y-2 text-sm mb-6">
              <a href="tel:+916369366250" className="block text-cyan-600 hover:underline">+91 6369366250</a>
              <a href="mailto:info@thecryptoape.com" className="block text-cyan-600 hover:underline">info@thecryptoape.com</a>
              <a href="https://t.me/Thecryptoape" className="block text-cyan-600 hover:underline">@Thecryptoape</a>
            </div>

            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/crypto-ape" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/theCryptoApe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://x.com/the_crypto_ape_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://in.pinterest.com/the_CryptoApe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-4.37 23.17c-.08-.74-.16-1.88.03-2.69.17-.73 1.1-4.67 1.1-4.67s-.28-.56-.28-1.39c0-1.3.75-2.27 1.69-2.27.8 0 1.18.6 1.18 1.32 0 .8-.51 2-.77 3.11-.22.93.47 1.68 1.38 1.68 1.66 0 2.93-1.75 2.93-4.28 0-2.24-1.61-3.8-3.9-3.8-2.66 0-4.23 2-4.23 4.05 0 .8.31 1.66.7 2.13.08.09.09.17.06.27l-.27 1.09c-.04.17-.13.21-.3.13-1.17-.55-1.9-2.26-1.9-3.64 0-2.95 2.14-5.66 6.18-5.66 3.25 0 5.77 2.32 5.77 5.41 0 3.23-2.03 5.83-4.86 5.83-.95 0-1.84-.49-2.14-1.08l-.58 2.22c-.21.81-.78 1.83-1.16 2.45A12 12 0 1012 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/the_cryptoape/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@the_CryptoApe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Clone Scripts</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Binance Clone Script</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Cryptocurrency Exchange Script</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Pancakeswap Clone Script</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Opensea Clone Script</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">P2P Crypto Exchange Script</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">CoinPayments Clone Script</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">NFT Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">NFT Marketplace Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">NFT Game Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">NFT Art Marketplace Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Real Estate NFT Marketplace Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Game Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">Web3 Game Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">DEFI Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">DEFI Yield Farming Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">DEFI Dapp Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">DEFI Development</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">DEFT Staking Platform</li>
              <li className="hover:text-cyan-600 cursor-pointer transition-colors">DEFI Lending and Borrowing</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600">
          Copyrights 2025 CryptoApe. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
