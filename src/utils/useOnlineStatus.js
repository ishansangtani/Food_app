import { useEffect, useState } from "react";
const useOnlineStatus= () =>{
     const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
    useEffect (() =>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });

    },[]); // bcz we need it to be caled only once , thats why we use useEffect 

    return onlineStatus;

};

export default useOnlineStatus;