import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Scrollup from "./components/scrollup/Scrollup";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";


const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
      {/* <Footer /> */}
      {/* <Scrollup /> */}
    </>
  );
};

export default App;