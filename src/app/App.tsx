// @ts-nocheck
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Button, Container, Stack, Typography } from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage/index";
import { UserPage } from "./screens/userPage/index";
import { OrdersPage } from "./screens/ordersPage/index";
import { ProductsPage } from "./screens/productsPage/index";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import { HelpPage } from "./screens/helpPage";
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}

      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/orders">
          <OrdersPage />
        </Route>

        <Route path="/member-page">
          <UserPage />
        </Route>

        <Route path="/help">
          <HelpPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
