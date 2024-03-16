import React from "react";
import Navbar from "../../components/navbar/navbar-component";
import BlogComponent from "../../components/ourWork/blog/blog-component";
import ContactUs from "../../components/contactUs/whiteContactUs";

function BlogRoute(props) {
  return (
    <div>
      <Navbar />
      <BlogComponent />
      <ContactUs />
    </div>
  );
}

export default BlogRoute;
