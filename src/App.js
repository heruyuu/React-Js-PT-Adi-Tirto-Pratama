import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'; // Tambahkan useState
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Loading from './components/Loading'; // Import komponen Loading

function App() {
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });

    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setLoading(false); // Set loading menjadi false setelah 2 detik
    }, 2000);

    return () => clearTimeout(timer); // Bersihkan timer saat unmount
  }, []);

  if (loading) {
    return <Loading />; // Tampilkan komponen Loading saat loading
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
