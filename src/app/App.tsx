// @ts-nocheck
import React from "react";
import { Container, Stack, Box, Typography, Button } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import AboutPage from "./screens/helpPage";
import UsersPage from "./screens/usersPage";
import OrdersPage from "./screens/ordersPage";
import ProductsPage from "./screens/productsPage";
import HomePage from "./screens/homePage";
import Test from "./screens/Test";
import OtherNavbar from "./components/headers/OtherNavbar";
import HomeNavbar from "./components/headers/homeNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <Switch>
        <Route path="/help">
          <AboutPage />
        </Route>
        <Route path="/member-page">
          <UsersPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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
