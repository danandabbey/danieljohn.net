import { createContext, useState } from "react";
import style from "./assets/styles";
import Contact from "./components/ContactSection";
import Info from "./components/Info";

export const styleContext = createContext({});
export const mobileContext = createContext({});

const App = () => {

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
