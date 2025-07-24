import React from 'react';

const HeroSection = () => (
  <section className="relative text-white text-center min-h-[400px] flex items-center justify-center overflow-hidden">
    <iframe
      className="absolute top-[45%] left-1/2 w-[100vw] h-[56.25vw] min-w-full min-h-full max-h-none transform -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
      src="https://www.youtube.com/embed/Nb6H08rjiZ4?autoplay=1&mute=1&loop=1&playlist=Nb6H08rjiZ4&controls=0&showinfo=0&modestbranding=1"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-2">EMKL Logistic</h1>
      <p className="text-xl">Menghubungkan Dunia, Menggerakkan Bisnis Anda</p>
    </div>
  </section>
);

export default HeroSection;
