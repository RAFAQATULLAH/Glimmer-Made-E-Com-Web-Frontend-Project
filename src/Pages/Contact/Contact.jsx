import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer";

import ContactHero from "./Components/ContactHero/ContactHero";
import ContactInfo from "./Components/ContactInfo/ContactInfo";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactFAQ from "./Components/ContactFAQ/ContactFAQ";

const Contact = () => {
  return (
    <>
      <Nav />

      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactFAQ />
      </main>

      <Footer />
    </>
  );
};

export default Contact;