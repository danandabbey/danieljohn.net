import style from "../assets/styles";
import ContactCard from "./ContactCard";

const Contact = () => {
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
    <div id={"contactSection"} style={style.contactSection}>
      {cards.map((card) => {
        return (
          <ContactCard
            key={card.name}
            title={card.name}
            destination={card.destination}
          />
        );
      })}
    </div>
  );
};

export default Contact;
