import React from "react";
import { Link } from "react-router-dom";

import { switchRoutes, CartContext } from "@/core";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const AppBarComponent: React.FC = () => {
  const cartContext = React.useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Online store</Typography>
        <ButtonGroup variant="contained" color="info" sx={{ ml: 2 }}>
          <Button component={Link} to={switchRoutes.cats}>
            Cats
          </Button>
          <Button component={Link} to={switchRoutes.dogs}>
            Dogs
          </Button>
        </ButtonGroup>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className="cart-button"
          onClick={() => cartContext.setCartVisible(!cartContext.cartVisible)}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
