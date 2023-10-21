import { useState } from "react";
import style from "../assets/styles";

const ContactCard = (props: any) => {
  const { destination, title } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const titleStyle = {
    color: "#fff",
    fontSize: mobile ? "30px" : "50px",
  };

  isHovered ? (titleStyle.color = "#000") : (titleStyle.color = "#fff");

  if (mobile) {
    return (
      <div id={"contactCard"} style={style.contactCard}>
        <a style={style.link} href={destination} target="_blank">
          <h5 style={titleStyle}>{title}</h5>
        </a>
      </div>
    );
  } else {
    return (
      <div id={"contactCard"} style={style.contactCard}>
        <a style={style.link} href={destination} target="_blank">
          <h5
            style={titleStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {title}
          </h5>
        </a>
      </div>
    );
  }
};

export default ContactCard;
