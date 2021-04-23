import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Footer, Sider } from "../components";

import "../styles/layout.css";

export default function layout(props) {
  const { routes } = props;
  return (
    <>
      <Navbar />
      <Sider />
      <LoadRoutes routes={routes} />
      <Footer />
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
