import { useState, useEffect } from "react";
import getStyle from "../assets/styles";

const Loading = (): React.ReactNode => {
  const [view, setView] = useState<any>(".");
  const style: any = getStyle();

  useEffect(() => {
    let n = 0;
    let interval = setInterval(() => {
      if (n < 10) {
        setView((msg: any) => msg + "."), n++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={style.loading}>
      <div style={style.loadingDot}>{view}</div>
    </div>
  );
};

export default Loading;
