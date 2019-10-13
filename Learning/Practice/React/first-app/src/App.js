import React from "react";

import HomePage from "./components/HomePageComponents/HomePage";
import AboutPage from "./components/AboutPageComponents/AboutPage";
import Header from "./components/CommonComponents/Header";

// Old Way of routing
// export default function App() {
//   const route = window.location.pathname;
//   if (route === "/about") return <AboutPage />;
//   return <HomePage />;
// }

export default function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }

  // functions are refered with {} brackets and just name is required
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}
