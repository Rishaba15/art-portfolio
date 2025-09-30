import Header from './components/Header.jsx';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2025 Rishaba. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;