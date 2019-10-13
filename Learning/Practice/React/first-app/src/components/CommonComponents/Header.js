import React from "react";
import { NavLink } from "react-router-dom";
// anchor here will reload the page do use Link
// link will enable client side routing
// anchor the oldway
// function Header() {
//   return (
//     <nav>
//       <a href="/">Home</a> | <a href="/about">About</a>
//     </nav>
//   );
// }

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
