import React from "react";
import TalkAboutProject from "./Section/TalkAboutProject/TalkAboutProject";
import IconTrust from "./Section/IconTrust/IconTrust";
import ContactForm from "./Section/ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <TalkAboutProject />
      <IconTrust />
      <ContactForm />
    </div>
  );
};

export default Contact;
