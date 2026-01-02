import React from "react";
import { Outlet } from "react-router-dom";

class IndexHome extends React.Component {
  render() {
    return <Outlet />;
  }
}

export default IndexHome;
