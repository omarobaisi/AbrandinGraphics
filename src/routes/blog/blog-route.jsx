import React from "react";
import Navbar from "../../components/navbar/navbar-component";
import BlogComponent from "../../components/ourWork/blog/blog-component";
import WhiteContactUs from "../../components/contactUs/whiteContactUs";
import BlackContactUs from "../../components/contactUs/blackContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import BlogDetailsComponent from "../../components/ourWork/blog/blog-details-component";

function BlogRoute(props) {
  const location = useLocation();
  const color = location.pathname.includes("/details") ? "black" : "white";
  const secondaryColor = location.pathname.includes("/details")
    ? "white"
    : "black";
  const ContactUsComponent = location.pathname.includes("/details")
    ? BlackContactUs
    : WhiteContactUs;
  return (
    <div>
      <Navbar color={color} secondaryColor={secondaryColor} />
      <Routes>
        <Route index element={<BlogComponent />} />
        <Route path="details" element={<BlogDetailsComponent />} />
      </Routes>
      <ContactUsComponent />
    </div>
  );
}

export default BlogRoute;
