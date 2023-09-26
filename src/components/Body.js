import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9855754&lng=77.55896849999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRes(json?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[2].card.card.gridElements?.infoWithStyle?.restaurants);
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
          <Link key={obj?.info?.id} to = {`/restaurants/${obj?.info?.id}`}>
            <RestaurantCard resObj={obj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
