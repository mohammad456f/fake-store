import type { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import CardComponent from "@/components/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { Card } from "@/typings";

export default function Home() {
  const cards = useSelector((state: RootState) => state.cards.value);
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [search, setSearch] = useState("");
  console.log(cards);

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [cards]);

  return (
    <>
      <TextField
        label="Search products"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container alignItems="stretch" spacing={2}>
        {filteredCards.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
            key={card.id}
          >
            <CardComponent data={card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
