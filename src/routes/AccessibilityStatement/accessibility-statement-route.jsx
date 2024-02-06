import React from "react";
import Navbar from "../../components/navbar/navbar-component";
import AccessibilityStatement from "../../components/license/AccessibilityStatement/accessibility-statement-component";
import ContactUs from "../../components/contactUs/whiteContactUs";

function Merchandise(props) {
  return (
    <div>
      <Navbar />
      <AccessibilityStatement />
      <ContactUs />
    </div>
  );
}

export default Merchandise;
