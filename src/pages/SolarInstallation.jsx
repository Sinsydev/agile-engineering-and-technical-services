import React from "react";
import { motion } from "framer-motion";

const solarImages = [
  { src: "/images/solar1.webp", title: "Residential Solar Setup" },
  { src: "/images/solar2.webp", title: "Commercial Solar Panels" },
  { src: "/images/solar3.webp", title: "Rooftop Solar Installation" },
  { src: "/images/solar4.webp", title: "Ground-Mounted Solar Farm" },
  { src: "/images/solar5.webp", title: "Hybrid Solar Inverter" },
  { src: "/images/solar6.webp", title: "Solar Battery Storage" },
  { src: "/images/solar7.webp", title: "Rural Solar Electrification" },
  { src: "/images/solar8.webp", title: "Off-Grid Solar Solutions" },
  { src: "/images/solar9.webp", title: "Solar Panel Cleaning" },
  { src: "/images/solar10.webp", title: "Industrial Solar Power" },
  { src: "/images/solar11.webp", title: "Solar Water Heating" },
];

const benefits = [
  {
    title: "Cost Savings",
    text: "Reduce electricity bills with efficient solar systems and favourable ROI.",
    icon: "💰",
  },
  {
    title: "Reliable Performance",
    text: "High-quality panels, inverters, and installations for decades of service.",
    icon: "⚡",
  },
  {
    title: "Eco-Friendly",
    text: "Lower your carbon footprint and support sustainable energy adoption.",
    icon: "🌿",
  },
];

const processSteps = [
  { step: "1", title: "Consultation", desc: "Site visit, load assessment & feasibility." },
  { step: "2", title: "Design", desc: "Custom system design and ROI modelling." },
  { step: "3", title: "Installation", desc: "Professional installation & safety tests." },
  { step: "4", title: "Commissioning", desc: "Final checks, monitoring setup & handover." },
];

const testimonials = [
  {
    name: "Mrs. Amina Bello",
    role: "Homeowner",
    text: "Fast install, courteous team and my monthly electric bill dropped dramatically.",
  },
  {
    name: "Engr. Musa Ibrahim",
    role: "Site Manager",
    text: "Professional delivery on our commercial rooftop project — performance is excellent.",
  },
  {
    name: "Mr. John Okoye",
    role: "Farm Owner",
    text: "Reliable off-grid solution. Batteries and panels are sturdy and well-installed.",
  },
];

export default function SolarInstallation() {
  return (
    <div className="w-full font-sans text-gray-900 antialiased">
      {/* HERO - Video background */}
      <header className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <video
          src="/videos/solar-installation.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/solar01.webp"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Solar installation background video"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Powering the Future with Solar Energy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 max-w-3xl text-sm sm:text-base text-gray-100"
          >
            Clean, reliable and cost-effective solar installations for homes, businesses and communities —
            designed, installed and supported by experienced professionals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex gap-3"
          >
            <a
              href="#contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow"
            >
              Request a Quote
            </a>
            <a
              href="#gallery"
              className="inline-block border border-white/30 text-white px-5 py-3 rounded-full hover:bg-white/10"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </header>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Our Solar Installation
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start gap-4"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-md text-2xl">
                  <span>{b.icon}</span>
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="text-gray-600">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Timeline */}
      <section className="bg-white py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            How Our Process Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((p, idx) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col items-start gap-3 bg-gray-50 p-5 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                  {p.step}
                </div>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-gray-900 py-12 md:py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Solar Installation Projects
          </motion.h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {solarImages.map((img, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-xl bg-neutral-800"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h4 className="text-lg font-semibold">{img.title}</h4>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <footer className="text-sm text-gray-500">
                  — <span className="font-semibold text-gray-800">{t.name}</span>, {t.role}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl p-10 text-center shadow-lg">
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to switch to solar?
          </motion.h3>
          <p className="text-gray-900 mb-6 max-w-3xl mx-auto">
            Book a free site assessment today. We'll provide a customized proposal and a clear roadmap
            for your solar project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agileengineeringlimited@gmail.com"
              className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+2348035999507"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold"
            >
              Call +234 803 5999 507
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">Agile Engineering</h4>
            <p className="text-sm text-gray-300">
              Jibia Road Opposite Army Barracks, Katsina, Nigeria.
            </p>
            <p className="text-sm text-gray-300 mt-2">Email: agileengineeringlimited@gmail.com</p>
            <p className="text-sm text-gray-300">Phone: +234 803 5999 507</p>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/solarinstallation" className="hover:underline">Solar Installation</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2">Follow Us</h5>
            <div className="flex gap-3">
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400 mt-8">
          © {new Date().getFullYear()} Agile Engineering & Technical Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}





