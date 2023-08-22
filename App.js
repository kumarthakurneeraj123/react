import React from "react";
import ReactDOM from "react-dom/client";
import foodLogo from "./resources/images/foodLogo.png"

/*
  Header
  -Logo
  -Nav-items

  Body
  -Search
  -Restaurant Container
  -Restaurant Cards

  Footer
  - copyright
  - links
  - address
  - contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
        className="logo"
        src={foodLogo}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props)=>{
  const {resObj} = props;
  const {cloudinaryImageId,name, cuisines,avgRating,sla,costForTwo  } = resObj?.info;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0",}}>
      <img className="res-logo" alt="restaurant-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
      <h5>{costForTwo}</h5>
      
    </div>
  );
}

const resObj = [
  {
    "info": {
      "id": "685759",
      "name": "The Rameshwaram Cafe",
      "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
      "locality": "2nd Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "685759",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4700
      },
      "parentId": "384316",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.5,
        "serviceability": "SERVICEABLE",
        "slaString": "34 mins",
        "lastMileTravelString": "5.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-rameshwaram-cafe-2nd-phase-jp-nagar-bangalore-685759",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "201224",
      "name": "Asha tiffins",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "locality": "7th Sector",
      "areaName": "HSR Layout",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "South Indian",
        "Beverages"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "201224",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2900
      },
      "parentId": "236243",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "12 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 15:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹70",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "660675",
      "name": "Cafe Amudham",
      "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
      "locality": "5th Block Kormangala",
      "areaName": "Koramangala",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.6,
      "feeDetails": {
        "restaurantId": "660675",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3500
      },
      "parentId": "396620",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/cafe-amudham-5th-block-kormangala-koramangala-bangalore-660675",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "190224",
      "name": "Paakashala",
      "cloudinaryImageId": "odh45j5wztvhsmu5gasc",
      "locality": "1st Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "190224",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4700
      },
      "parentId": "6959",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/paakashala-1st-phase-jp-nagar-bangalore-190224",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "607353",
      "name": "The Filter Coffee",
      "cloudinaryImageId": "hcgo1vj7mikezkmqcroh",
      "locality": "Bannergatta Main Road",
      "areaName": "Arekere",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "607353",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5300
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5300
      },
      "parentId": "21001",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 6.5,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "6.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-filter-coffee-bannergatta-main-road-arekere-bangalore-607353",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "422863",
      "name": "Jose Mess",
      "cloudinaryImageId": "lltunkievzpxrrcarfmy",
      "locality": "Maruti Nagar",
      "areaName": "Btm Layout",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "422863",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2900
      },
      "parentId": "20129",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jose-mess-maruti-nagar-btm-layout-bangalore-422863",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "524353",
      "name": " Irani Std. Tea",
      "cloudinaryImageId": "bwkz4uv3qyx33brboywf",
      "locality": "4th Sector",
      "areaName": "HSR Layout",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Snacks",
        "Beverages",
        "Bakery",
        "Desserts",
        "Fast Food"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "524353",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2900
      },
      "parentId": "374583",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-29 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/-irani-std-tea-4th-sector-hsr-layout-bangalore-524353",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "526109",
      "name": "Arogya Ahaara",
      "cloudinaryImageId": "d0jnosd8rwjljcjnxkec",
      "locality": "5th Sector",
      "areaName": "HSR Layout",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "526109",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2900
      },
      "parentId": "301948",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 11:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹45",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/arogya-ahaara-5th-sector-hsr-layout-bangalore-526109",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "171768",
      "name": "Mumbai Tiffin",
      "cloudinaryImageId": "h58dwaoafbqj0ax5h26b",
      "locality": "1st Sector",
      "areaName": "HSR Layout",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Home Food",
        "Thalis"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "171768",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2900
      },
      "parentId": "13235",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-22 16:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-370ecb22-be0b-4e18-8576-f7ed1f510347"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mumbai-tiffin-1st-sector-hsr-layout-bangalore-171768",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Body = ()=>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resName="Meghana Foods" cuisine="Chinese, North Indian"/> */}
        {resObj.map((obj, index)=><RestaurantCard key={obj.info.id} resObj={obj}/>)}
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
