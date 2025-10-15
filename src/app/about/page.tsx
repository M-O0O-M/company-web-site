import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About CryptoApe</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We are a leading blockchain development company specializing in cutting-edge solutions for the decentralized future.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://ext.same-assets.com/409122903/2004032950.webp"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                CryptoApe was founded with a vision to make blockchain technology accessible to businesses worldwide. Since our inception, we've helped over 500+ clients across 50+ countries launch successful blockchain projects.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team of expert developers, designers, and blockchain architects work tirelessly to deliver innovative solutions that drive real business value. From cryptocurrency exchanges to DeFi platforms, NFT marketplaces to enterprise blockchain solutions, we've done it all.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in building long-term partnerships with our clients, providing ongoing support and ensuring their platforms scale as their business grows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Innovation First",
                description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
              },
              {
                icon: "🔒",
                title: "Security Focused",
                description: "Your security is our priority. We implement industry-leading security practices to protect your assets and data.",
              },
              {
                icon: "🤝",
                title: "Client Success",
                description: "We measure our success by yours. Your goals become our goals, and we work tirelessly to achieve them together.",
              },
            ].map((value, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.2}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Countries Served" },
              { number: "100+", label: "Team Members" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-cyan-50">
              Let's build something amazing together. Get in touch with our team today.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Contact Us Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
