import React from 'react';
import './App.css';

// Import your components
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Services from './assets/components/Services';
import ProsCons from './assets/components/ProsCons';
import Projects from './assets/components/Projects';
import Testimony from './assets/components/Testimony';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProsCons />
        <Projects />
        <Testimony />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;