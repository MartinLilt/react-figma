import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

import Hero from "./components/hero";
import Media from "./components/media";
import Schedule from "./components/schedule";
import Talent from "./components/talent";
import Faqs from "./components/faqs";
import Info from "./components/info";
import About from "./components/about";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Media />
        <Schedule />
        <Talent />
        <Faqs />
        <Info />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;
