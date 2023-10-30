import { useContext } from "react";
import ContactCard from "./ContactCard";
import { styleContext } from "../App";

const Contact = () => {
  const style: any = useContext(styleContext);

  const cards = [
    {
      name: "Github",
      destination: "http://github.com/danandabbey",
    },
    {
      name: "Otium Labs",
      destination: "https://otium.dev",
    },
    {
      name: "Email",
      destination: "mailto:contact@danieljohn.net?subject=contact",
    },
  ];

  return (
    <div id={"contactCon"} style={style.contactCon}>
      {cards.map((card) => {
        return (
          <ContactCard
            key={card.name}
            text={card.name}
            destination={card.destination}
          />
        );
      })}
    </div>
  );
};

export default Contact;
