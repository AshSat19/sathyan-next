import { Button } from "primereact/button";

import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.contactsContainer}>
      <img
        src="../assets/images/sat.png"
        className={classes.logo}
        alt="Sathian"
      />
      <Button
        icon="pi pi-envelope"
        label="sathyanpeevee@gmail.com"
        className="p-button-outlined p-button-rounded m-1 w-9"
        onClick={_openEmail}
      />
      <Button
        icon="pi pi-phone"
        label="+968 99378367"
        className="p-button-outlined p-button-rounded m-1 w-9"
        onClick={_openPrimaryPhone}
      />
      <Button
        icon="pi pi-phone"
        label="+968 99685333"
        className="p-button-outlined p-button-rounded m-1 w-9"
        onClick={_openSecondaryPhone}
      />
    </div>
  );
}

function _openEmail() {
  window.open("mailto:sathyanpeevee@gmail.com", "_blank");
}

function _openPrimaryPhone() {
  window.open("tel:+96899378367", "_blank");
}

function _openSecondaryPhone() {
  window.open("tel:+96899685333", "_blank");
}

export default Contact;
