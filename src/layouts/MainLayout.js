import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default MainLayout;
