import React from "react";
import TalkAboutProject from "./Section/TalkAboutProject/TalkAboutProject";
import IconTrust from "./Section/IconTrust/IconTrust";
import ContactForm from "./Section/ContactForm/ContactForm";
import PageStyle from "../../components/Page/PageStyle";

const Contact = () => {
  return (
    <PageStyle>
      <TalkAboutProject />
      <IconTrust />
      <ContactForm />
    </PageStyle>
  );
};

export default Contact;
