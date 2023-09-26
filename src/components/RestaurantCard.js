import { LOGO_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resObj} = props;
    const {cloudinaryImageId,name, cuisines,avgRating,sla,costForTwo  } = resObj?.info;
    console.log(resObj?.info);
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
        <img className="res-logo" alt="restaurant-logo" src={`${LOGO_URL}/${cloudinaryImageId}`} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla?.deliveryTime} minutes</h5>
        <h5>{costForTwo}</h5>
        
      </div>
    );
  }

  export default RestaurantCard;