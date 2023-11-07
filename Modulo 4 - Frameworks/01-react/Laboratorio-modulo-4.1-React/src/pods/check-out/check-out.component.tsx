import React from "react";
import { Link } from "react-router-dom";

import { PictureInfo } from "@/common";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Divider } from "@mui/material";

interface Props {
  cartList: PictureInfo[];
}

export const CheckOutComponent: React.FC<Props> = (props) => {
  const { cartList } = props;

  return (
    <div className="checkout-page">
      <Container maxWidth="sm">
        <Container maxWidth="sm" sx={{ my: 2, textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Check Out
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
          >
            Back to the shop
          </Button>
        </Container>
        <Paper elevation={2}>
          <List>
            {cartList.map((picture) => (
              <React.Fragment key={`item-${picture.id}`}>
                <ListItem>
                  <img
                    src={picture.picUrl}
                    alt="{picture.title}"
                    style={{ borderRadius: 3, marginRight: 16 }}
                    width="120"
                  />
                  <ListItemText primary={picture.title} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Container>
    </div>
  );
};
