import { CDN_URL } from "../src/utils/constants";
import { Link } from "react-router-dom";
const ResturantCard = (props) => {
    const { resData } = props;

    return (
        <Link to={`/restaurants/${resData.info.id}`} style={{textDecoration:"none", color:"inherit"}}>
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img
                className="res-logo rounded-lg"
                src={CDN_URL + resData.info.cloudinaryImageId}
                onError={(e) => {
                    e.currentTarget.src = CDN_URL + "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/6def0f0f-9e6c-45c0-b5e6-05af750f27b5_795906.JPG";
                }}
                alt="res-logo"
            />
            <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
        </Link>
    );
}; 

export default ResturantCard;