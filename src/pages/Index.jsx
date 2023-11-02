import PageHeader from "components/PageHeader/PageHeader";
import React, { useEffect } from "react";
import Basics from "views/IndexSections/Basics";
import Navbars from "views/IndexSections/Navbars";

const Index = () => {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <div className="wrapper" style={{marginBottom:"80px"}}>
      <PageHeader />
      <div className="main">
        <Basics />
        <Navbars />
      </div>
    </div>
  );
};

export default Index;
