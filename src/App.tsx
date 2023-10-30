import { useEffect, createContext, useState } from "react";
import getStyle from "./assets/styles";
import Contact from "./components/ContactSection";
import Info from "./components/Info";
import Loading from "./components/Loading";

export const styleContext = createContext({});
export const mobileContext = createContext({});

const App = () => {
  const [style, setStyles]: any = useState(getStyle());

  useEffect(() => {
    setStyles(getStyle());
  }, []);

  return (
    <styleContext.Provider value={style}>
      <div id={"app"} style={style.app}>
        <div style={style.main}>
          <Info />
          <Contact />
        </div>
      </div>
    </styleContext.Provider>
  );
};
export default App;
