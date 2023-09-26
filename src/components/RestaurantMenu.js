import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(
      `${MENU_API}${resId}`
    );
    
    const json = await res.json();
    console.log(`${MENU_API}${resId}`);
    console.log(
      "In menu",
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setResInfo(json?.data);
  };
  const { name, cuisines, costForTwoMessage } =
    resInfo !== null ? resInfo?.cards[0]?.card?.card?.info : "";
  const { itemCards } =
    resInfo !== null
      ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      : "";

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu List</h2>
      <ul>
        {itemCards?.map((menu) => (
          <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - Rs. {menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
