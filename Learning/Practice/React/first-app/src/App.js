import React from "react";
import HomePage from "./components/HomePageComponents/HomePage";
import AboutPage from "./components/AboutPageComponents/AboutPage";
import Header from "./components/CommonComponents/Header";
import { Route } from "react-router-dom";

// Old Way of routing
// export default function App() {
//   const route = window.location.pathname;
//   if (route === "/about") return <AboutPage />;
//   return <HomePage />;
// }

// export default function App() {
//   //old way part 2
//     function getPage() {
//       const route = window.location.pathname;
//       if (route === "/about") return <AboutPage />;
//       return <HomePage />;
//     }

//   // functions are refered with {} brackets and just name is required. this is how we write Js within JSX
//   return (
//     <div className="container-fluid">
//       <Header />
//       {getPage()}
//     </div>
//   );
// }
// beacuse home page route match all route so use exact

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}
