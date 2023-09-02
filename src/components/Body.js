import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9129618&lng=77.6271216&collection=80358&isNewCollectionFlow=true&tags=layout_BAU_Contextual%2Clayout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    let listOfRestaurant = [];
    for (const res of json?.data?.cards) {
      if (res?.card?.card?.info) {
        listOfRestaurant.push(res.card.card);
      }
    }
    setListOfRes(listOfRestaurant);
    setFilteredRes(listOfRestaurant);
    console.log(listOfRestaurant);
  };
  //   if(listOfRes.length === 0){
  //     return <Shimmer />
  //   }
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
                setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={()=>{
            console.log(searchText);
            const filteredData = listOfRes.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRes(filteredData);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = listOfRes.filter(
              (res) => res?.info?.avgRating >= 4.5
            );
            setFilteredRes(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resName="Meghana Foods" cuisine="Chinese, North Indian"/> */}
        {filteredRes.map((obj, index) => (
          <RestaurantCard key={obj?.info?.id} resObj={obj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
