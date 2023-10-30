import { useContext, useState } from "react";
import { styleContext } from "../App";

const ContactCard = (props: any) => {
  const style: any = useContext(styleContext);
  const { destination, text } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const textStyle = {
    color: style.contact.color,
    fontSize: "30px",
  };

  isHovered
    ? (textStyle.color = style.accentColor)
    : (textStyle.color = style.contact.color);

  if (mobile) {
    return (
      <div style={style.contact}>
        <a style={style.link} href={destination} target="_blank">
          <p style={textStyle}>{text}</p>
        </a>
      </div>
    );
  } else {
    return (
      <div style={style.contact}>
        <a style={style.link} href={destination} target="_blank">
          <p
            style={textStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {text}{" "}
          </p>
        </a>
      </div>
    );
  }
};

export default ContactCard;
