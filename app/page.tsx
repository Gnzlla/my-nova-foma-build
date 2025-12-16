import React from "react";
import NavigationBar from "./Navbar/page";
import HeroSection from "./heroSection/page";

const App = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <section className="h-screen w-full"></section>
      <section className="h-screen w-full bg-amber-100"></section>
    </>
  );
};

export default App;
