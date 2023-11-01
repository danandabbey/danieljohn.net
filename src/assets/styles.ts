const bodyStyle = document.body.style;
bodyStyle.border = "0px";
bodyStyle.margin = "0px";
bodyStyle.overflowX = "hidden";

const colors = {
  main: "#f2efe9",
  accent: "#bfb48f",
  background: "#252627",
};
const mobile = window.innerWidth <= 900;
const setStyles = () => {
  return {
    accentColor: colors.accent,
    app: {
      backgroundColor: colors.background,
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      width: mobile ? "100vw" : "75vh",
    },
    introCon: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    intro: {
      display: "flex",
      color: colors.main,
      padding: ".5em",
      fontSize: "30px",
      textAlign: mobile ? "center" : "left",
      marginBlockStart: "0em",
      marginBlockEnd: "0em",
    },
    contactCon: {
      display: "flex",
      gap: "1em",
      justifyContent: "center",
      flexDirection: mobile ? "column" : "row",
      alignItems: "center",
    },
    contact: {
      color: colors.main,
      display: "flex",
      flexWrap: "wrap",
      margin: "1em",
      alignItems: mobile ? "center" : "left",
    },
    link: {
      textDecoration: "none",
      cursor: "",
    },
  };
};

export default setStyles;
