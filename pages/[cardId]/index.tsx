import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import classes from "@/styles/card.module.css";

const CardDetailPage = () => {
  const router = useRouter();
  const { cardId } = router.query;

  const cards = useSelector((state: RootState) => state.cards.value);

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {typeof cardId === "string"
          ? cards.filter((card) => card.id === parseInt(cardId))[0].title
          : ""}
      </Typography>
      <div className={classes.container}>
        <img
          className={classes.image}
          src={
            typeof cardId === "string"
              ? cards.filter((card) => card.id === parseInt(cardId))[0].image
              : ""
          }
          alt="Image Description"
        />
      </div>
      <Typography variant="subtitle1">
        Price:
        {typeof cardId === "string"
          ? cards.filter((card) => card.id === parseInt(cardId))[0].price
          : ""}
      </Typography>
      <Typography variant="subtitle1">
        category:
        {typeof cardId === "string"
          ? cards.filter((card) => card.id === parseInt(cardId))[0].category
          : ""}
      </Typography>
      <Typography variant="subtitle1">
        {typeof cardId === "string"
          ? cards.filter((card) => card.id === parseInt(cardId))[0].description
          : ""}
      </Typography>
    </>
  );
};

export default CardDetailPage;
