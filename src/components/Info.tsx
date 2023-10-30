import { useContext } from "react";
import { styleContext } from "../App";

const Name = () => {
  const style: any = useContext(styleContext);

  return (
    <div style={style.introCon}>
      <p style={style.intro}>
        Welcome, this is the site of Daniel Frederick, web developer. Below you
        can find some of my work and ways to contact me.
      </p>
    </div>
  );
};

export default Name;
