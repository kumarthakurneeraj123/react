import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{
    const [listOfRes, setListOfRes] = useState(resObj);
    console.log(listOfRes, setListOfRes);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterRes = listOfRes.filter((res)=>res.info.avgRating > 4.5);
                setListOfRes(filterRes);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {/* <RestaurantCard resName="Meghana Foods" cuisine="Chinese, North Indian"/> */}
          {listOfRes.map((obj, index)=><RestaurantCard key={obj.info.id} resObj={obj}/>)}
        </div>
      </div>
    );
  }

  export default Body;