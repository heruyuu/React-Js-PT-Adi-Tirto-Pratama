import React from 'react';
import exportImage from '../assets/image/export.jpg';
import importImage from '../assets/image/import.jpg';
import domestikImage from '../assets/image/domestik.jpg';

const ServiceCard = ({ image, title, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" data-aos="fade-up">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => (
  <section id="service" className="py-20 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h2 className="text-3xl font-bold mb-12 text-center relative text-gray-800">
        <span className="inline-block relative">
          SERVICE
          <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
        </span>
      </h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <ServiceCard
          image={exportImage}
          title="Export"
          description="Layanan Jasa Export dirancang untuk membantu bisnis dalam memperluas jangkauan mereka ke pasar global. Kami menawarkan solusi logistik yang lengkap, mulai dari pengemasan hingga pengiriman, dengan standar keamanan tinggi."
        />
        <ServiceCard
          image={importImage}
          title="Import"
          description="Percayakan kebutuhan impor Anda kepada Jasa Import, solusi terpercaya bagi bisnis atau perorangan yang ingin mengimpor barang dari luar negeri. Kami menawarkan layanan lengkap dan transparan untuk menjamin kepuasan Anda."
        />
        <ServiceCard
          image={domestikImage}
          title="Domestik"
          description="Dengan Jasa Pengiriman Domestik, Anda dapat menikmati layanan pengiriman yang efisien dan ekonomis. Kami menawarkan berbagai pilihan pengiriman sesuai kebutuhan Anda, mulai dari reguler hingga express."
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;
