import React from "react";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "@/typings";
import { deleteCardById } from "@/features/cards/cardsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

interface IProps {
  data: Card;
}

const Card = ({ data }: IProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <MuiCard sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 350 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description.slice(0, 70)}......
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="error"
            onClick={() => {
              dispatch(deleteCardById(data.id));
            }}
          >
            Delete
          </Button>
          <Button size="small" onClick={() => router.push(`/${data.id}`)}>
            More Detail
          </Button>
        </CardActions>
      </MuiCard>
    </>
  );
};

export default Card;
