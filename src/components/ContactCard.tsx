import { useState } from "react";

const ContactCard = (props: any) => {
  const { destination, title } = props;

  const mobile: boolean = window.innerWidth <= 900;
  const height = mobile ? "3em" : "5em";

  const styles = {
    contactCard: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: height,
    },
    cardTitle: {
      color: "#fff",
      fontSize: mobile ? "30px" : "50px",
    },
    link: {
      textDecoration: "none",
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  if (isClicked) {
    styles.cardTitle.color = "#000";
  } else {
    styles.cardTitle.color = "#fff";
  }

  if (isHovered) {
    styles.cardTitle.color = "#000";
  } else {
    styles.cardTitle.color = "#fff";
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div id={"contactCard"} style={styles.contactCard}>
      <a style={styles.link} href={destination} target="_blank">
        <h5
          style={styles.cardTitle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {title}
        </h5>
      </a>
    </div>
  );
};

export default ContactCard;
