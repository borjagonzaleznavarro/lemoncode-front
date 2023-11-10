import React from "react";
import { PictureInfoVM } from "@/common";

import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  list: PictureInfoVM[];
  title: string;
  onCheckPicture: (event, checked) => void;
}

export const PicturesListComponent: React.FC<Props> = (props) => {
  const { list, title, onCheckPicture } = props;
  
  return (
    <>
      <Typography variant="h6" sx={{mb: 2}}>{title}</Typography>
      <section className="pictures-container">
        {list.map((item) => (
          <Card sx={{ minWidth: 275 }} key={item.id}>
            <CardContent>
              <img src={item.picUrl} alt={item.title} />
              <Typography variant="overline" display="block" sx={{ my : 1 }}>
                {item.title}
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ShoppingCartIcon />}
                    checkedIcon={<CheckIcon />}
                    color="success"
                    id={item.id}
                    checked={item.selected}
                    onChange={onCheckPicture}
                    sx={{ mt: 0, mr: 1, mb: 0, ml: 2, p: 0 }}
                  />
                }
                label="Add to cart"
              />
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
};
