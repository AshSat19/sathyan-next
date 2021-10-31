import { Fragment } from "react";
import Contact from "../components/Contact";
import SiteHead from "../components/SiteHead";
import TopNav from "../components/ui/TopNav/TopNav";

function ContactPage() {
  return (
    <Fragment>
      <SiteHead title="Reach Out" />
      <TopNav></TopNav>
      <Contact></Contact>
    </Fragment>
  );
}

export default ContactPage;
