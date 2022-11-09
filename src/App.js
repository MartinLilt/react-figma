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
import Loader from "./components/loader";
import { PageFormatContext } from "./context/pageFormatContext";
import { useState, useRef, useLayoutEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";

const App = () => {
  const target = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    target.current && setRoundedSize(target.current.getBoundingClientRect());
  }, [target]);

  const setRoundedSize = ({ width, height }) => {
    setSize({ width: Math.round(width), height: Math.round(height) });
  };

  useResizeObserver(target, (entry) => {
    const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
    setRoundedSize({ width, height });
  });

  return (
    <div ref={target} style={{ overflow: "auto" }}>
      <Loader />
      <PageFormatContext.Provider value={size.width}>
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
      </PageFormatContext.Provider>
    </div>
  );
};

export default App;
