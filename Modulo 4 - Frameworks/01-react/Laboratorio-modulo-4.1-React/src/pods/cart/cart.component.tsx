import React from "react";
import { Link } from "react-router-dom";

import { switchRoutes } from "@/core";
import { PictureInfo } from "@/common";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

interface Props {
  cartList: PictureInfo[];
  contextCart: string[];
  onDeleteAll: (event) => void;
  onDeleteItem: (event) => void;
}

export const CartComponent: React.FC<Props> = (props) => {
  const { cartList, contextCart, onDeleteAll, onDeleteItem } = props;

  return (
    <>
      <Paper variant="outlined">
        <Typography variant="h6" sx={{ mb: 2 }}>
          <Chip label={cartList.length} variant="outlined" sx={{ mr: 1 }} />
          items in your cart
        </Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          disabled={contextCart.length === 0}
          onClick={onDeleteAll}
        >
          Delete All
        </Button>
        <List>
          {cartList.map((picture) => (
            <React.Fragment key={picture.id}>
              <ListItem
                sx={{
                  px: 0,
                  py: 1,
                }}
              >
                <img src={picture.picUrl} alt={picture.title} width="80" />
                <ListItemText primary={picture.title} />
                <ListItemIcon>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={onDeleteItem}
                    id={`item-${picture.id}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          disabled={contextCart.length === 0}
          component={Link}
          to={switchRoutes.checkout}
        >
          Check out
        </Button>
      </Paper>
    </>
  );
};
