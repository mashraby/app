import React from "react";
import { Button, Fab, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/store/slicers/counterSlicer";
import { ICounterState } from "@/interfaces/counter.interface";
import AddIcon from "@mui/icons-material/Add";
import Layout from "@/components/layout/layout";

export default function CounterPage() {
  const { value } = useSelector((state: ICounterState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Layout title="counter page" description="ashdghasg">
        <Button variant="contained" onClick={handleDecrement}>
          -
        </Button>

        <Typography variant="h2">{value}</Typography>

        <Fab onClick={handleIncrement} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Layout>
    </>
  );
}
