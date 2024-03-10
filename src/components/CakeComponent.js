import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addPineappleCake,
  addVanillaCake,
  buyChocoCake,
  buyPineappleCake,
  buyVanillaCake,
} from "../store/cakeSlice";

export default function CakeComponent() {
  const cake = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  console.log(cake);
  return (
    <div>
      <h2>Welcome To My bakery</h2>
      <h4>Chocolate Cakes : {cake.chockCake}</h4>
      <button
        onClick={() => {
          dispatch(buyChocoCake());
        }}
      >
        Buy Chocolate Cake
      </button>
      <h4>Vanilla Cakes : {cake.vanillaCake}</h4>
      <button
        onClick={() => {
          dispatch(buyVanillaCake());
        }}
      >
        Buy Vanilla Cake
      </button>
      <button onClick={() => dispatch(addVanillaCake(7))}>
        Add Valilla cakes
      </button>
      <h4>Pineapple Cakes : {cake.pineappleCake}</h4>
      <button
        onClick={() => {
          dispatch(buyPineappleCake());
        }}
      >
        Buy Pineapple Cake
      </button>
      <button onClick={() => dispatch(addPineappleCake(5))}>
        Add Pineapple cakes
      </button>
    </div>
  );
}
