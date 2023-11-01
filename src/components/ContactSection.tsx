import { useContext } from "react";
import { styleContext } from "../App";
import ContactCard from "./ContactCard";

const Contact = () => {
  const style: any = useContext(styleContext);

  const cards = [
    {
      name: "Github",
      destination: "http://github.com/danandabbey",
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
