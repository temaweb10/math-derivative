import React from "react";
import Header from "../Header/Header";
function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PageLayout;
