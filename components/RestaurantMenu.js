import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import restaurants from "../src/utils/mockData";
const RestaurantMenu = () =>{

    const {resId} = useParams();

    // useEffect(() => 
    // {
    //     fetchMenu();
    // },[resId]);  // render everytime resId is called

console.log(resId);
const resInfo= restaurants.find((item) => item.info.id===resId);

if(!resInfo){
    return <h1>Restaurant not found</h1>
}

// api not working

    // const fetchMenu = async () =>{
    //         const restaurantId = 456789; 
    //     const data= await fetch("https://namastedev.com/api/v1/listRestaurantMenu/{restaurantId}");  
    //     const json= await data.json();
    //     console.log(json);
    //     setResInfo(json.info);
    // };

return(
    <div>
        <h1>{resInfo.info.name}</h1>
        <p>Cuisines: {resInfo.info.cuisines.join(", ")} - {resInfo.info.costForTwo}</p>
        <p>Rating: {resInfo.info.avgRating}</p>
        <h2>Menu</h2>

        <ul>
            {resInfo.menu.map((item,index)=> (
                <li key={index}>
                    {item.name}- ${item.price}
                </li>
            ))}
        </ul>
    </div>
);




 
};
export default RestaurantMenu;