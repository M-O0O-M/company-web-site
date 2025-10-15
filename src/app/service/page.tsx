import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
  const services = [
    {
      icon: "https://ext.same-assets.com/409122903/1538307622.png",
      title: "Cryptocurrency Exchange Development",
      description: "Build secure, scalable, and feature-rich cryptocurrency exchange platforms with advanced trading features.",
      features: ["Multi-currency support", "High liquidity", "Advanced security", "Real-time trading"],
    },
    {
      icon: "https://ext.same-assets.com/409122903/2026362493.jpeg",
      title: "DeFi Development",
      description: "Create decentralized finance solutions including yield farming, lending, borrowing, and staking platforms.",
      features: ["Smart contracts", "Liquidity pools", "Governance tokens", "Automated protocols"],
    },
    {
      icon: "https://ext.same-assets.com/409122903/1806632012.png",
      title: "NFT Marketplace Development",
      description: "Launch your own NFT marketplace for digital art, collectibles, gaming assets, and more.",
      features: ["Minting platform", "Auction system", "Royalty management", "Multi-chain support"],
    },
    {
      icon: "https://ext.same-assets.com/409122903/1319053319.png",
      title: "Web3 Development",
      description: "Build decentralized applications and Web3 solutions for the future of the internet.",
      features: ["dApp development", "Wallet integration", "Blockchain integration", "Smart contract development"],
    },
    {
      icon: "https://ext.same-assets.com/409122903/1223065678.png",
      title: "Metaverse Development",
      description: "Create immersive metaverse experiences with virtual worlds, avatars, and digital assets.",
      features: ["3D environments", "Virtual real estate", "Social features", "NFT integration"],
    },
    {
      icon: "https://ext.same-assets.com/409122903/3178883711.png",
      title: "Blockchain Game Development",
      description: "Develop engaging blockchain-based games with play-to-earn mechanics and NFT integration.",
      features: ["Play-to-earn", "In-game NFTs", "Tokenomics", "Multi-platform"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="https://ext.same-assets.com/409122903/4249360107.ico" alt="CryptoApe" width={40} height={40} />
            <span className="text-2xl font-bold text-[#2fa1c9]">CryptoApe</span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-cyan-500 transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive blockchain development services tailored to your business needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all group">
                  <div className="relative w-20 h-20 mb-6">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Our Development Process</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and UI/UX designs" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Deployment", description: "Launch and ongoing support" },
            ].map((process, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-cyan-50">
              Let's discuss your project and bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
