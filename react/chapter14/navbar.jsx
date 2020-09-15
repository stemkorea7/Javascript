import React, { Component, createFactory } from "react";

//매개변수값을 { totalCounters }로 하면서 사용시 코드를 줄일 수 있다.
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
