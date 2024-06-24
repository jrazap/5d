import { Helmet } from "react-helmet";
import About from "./components/includes/About";
import Banner from "./components/includes/Banner";
import Portfolio from "./components/includes/Portfolio";
import Skills from "./components/includes/Skills";

function App() {
  return (
    <>
      <Helmet>
        <title>5D | Frontend Task</title>
      </Helmet>

      <Banner />
      <Skills />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
