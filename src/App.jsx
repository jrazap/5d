import About from "./components/includes/About";
import Banner from "./components/includes/Banner";
import Portfolio from "./components/includes/Portfolio";
import Skills from "./components/includes/Skills";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
