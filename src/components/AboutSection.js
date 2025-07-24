import React from 'react';
import aboutImage from '../assets/image/about.jpg'; // Pastikan path ini benar

const AboutSection = () => (
  <section id="about" className="py-20 bg-white text-gray-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-100 opacity-50 transform -skew-y-6"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2 p-4 lg:p-8" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            ABOUT
            <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
          </h2>
          <p className="mb-4">
            PT. Adi Tirto Pratama adalah perusahaan yang berdedikasi dalam
            menyediakan solusi logistik terintegrasi untuk kebutuhan ekspor,
            impor, dan distribusi domestik. Berdiri dengan komitmen kuat untuk
            memberikan pelayanan terbaik, kami telah menjadi mitra terpercaya
            bagi banyak perusahaan di berbagai industri.
          </p>
          <p>
            Visi kami adalah menjadi pemimpin dalam industri logistik dengan
            terus berinovasi dan memberikan layanan yang melebihi harapan
            pelanggan. Kami berkomitmen untuk mendukung pertumbuhan bisnis
            Anda dengan menghadirkan solusi logistik yang cepat, aman, dan
            efisien.
          </p>
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8" data-aos="fade-left">
          <img
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            src={aboutImage}
            alt="Tentang PT. Adi Tirto Pratama"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
