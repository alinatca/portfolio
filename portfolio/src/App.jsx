import React from 'react';
import { Navbar, About, Contact, Footer, Hero, Projects } from './components';
import styles from './style';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
