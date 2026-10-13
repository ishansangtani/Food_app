import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../src/utils/useOnlineStatus";
import Offline from "./Offline";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log(json);

        const restaurants = json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestaurants(restaurants);
        setfilteredRestaurant(restaurants);
    };
    console.log(listOfRestaurants[3]);

        const onlineStatus= useOnlineStatus();
    if(onlineStatus=== false){
        return <Offline />;
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4 ">
                    <input type="text" className="search-box border-solid border-black rounded-lg " value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        const filtered = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filtered);
                    }}>Search</button> 
                </div>
                <div>
                <button className="filter-btn px-4 py-2 bg-gray-50 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                    setfilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (<ResturantCard key={restaurant.info.id} resData={restaurant} />))}
            </div>
        </div>
    );
};

export default Body;