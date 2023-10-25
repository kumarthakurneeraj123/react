import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    // Fetch the data
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>fetchData(), []);
    async function fetchData(){
        let data = await fetch(MENU_API+resId);
        let json = await data?.json();
        setResInfo(json?.data);
        console.log("My use", resInfo);
    }
    return resInfo;
};
export default useRestaurantMenu;