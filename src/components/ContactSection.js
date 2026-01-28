import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="py-20 bg-white text-gray-800 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-100 opacity-50 transform rotate-3"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <h2 className="text-3xl font-bold mb-12 text-center relative">
        <span className="inline-block relative">
          CONTACT
          <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
        </span>
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/5 px-4 mb-8" data-aos="fade-right">
          <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Hubungi Kami</h3>
            <div className="flex items-start mb-6">
              <FaMapMarkerAlt className="text-2xl text-blue-500 mr-4 mt-1" />
              <p className="text-gray-600">
                Perum Gelora Baddoka Indah<br />
                Blok G2 no.4 Makassar
              </p>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-2xl text-blue-500 mr-4" />
              <a 
                href="mailto:info@aditirtopratama.com" 
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                pt.aditirtopratama24@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 px-4 mb-8" data-aos="fade-left">
          <div className="bg-white rounded-lg shadow-lg p-2 h-full">
            <iframe
              className="w-full h-96 lg:h-[400px] border-none rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948.054717953834!2d119.51197410614226!3d-5.099278099999981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefb5d7df2f80b%3A0xeb869cda76c92e1!2sPerumahan%20Gelora%20Baddoka%20Indah%20Blok%20G1%2F21!5e0!3m2!1sid!2sid!4v1725524481431!5m2!1sid!2sid"
              title="Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
