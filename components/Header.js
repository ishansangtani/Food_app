import { LOGO_URL } from "../src/utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";   
import useOnlineStatus from "../src/utils/useOnlineStatus";


const Header= () =>{
   const [btnNameReact, setbtnNamereact]= useState("Login");
// imp****
// if no dependency array => useEffect called on every render
// If dependency array is empty=> useEffect is called in initial render(only once)
// IF dependency array us [btnNameReact] =>called every time btnNamereact changes 
useEffect(()=>{
   console.log("called");
},[btnNameReact]);

const onlinestatus= useOnlineStatus();
          return(
             <div className="flex justify-between shadow-lg item-center h-40 bg-pink-100 sm:bg-purple-100 ">    
                <><div className="logo-container flex items-center font-bold ">
                     <img className="w-40 flex items-center  " src={LOGO_URL} />
                        <h3 className="font-bold text-xl">Food APP</h3>      
                 
                 </div>
                 <div className="nav-items items-center flex text-xl font-semibold ">
                         <ul className="flex p-4 m-4 "> 
                             <li className="p-4">
                              Online Status: {onlinestatus? "✅":"🔴"}
                             </li>
                             <li className="p-4">
                              <Link to="/">Home</Link>
                              </li>
                             <li className="p-4">
                              <Link to="/about">About</Link>
                              </li>
                             <li className="p-4">
                              <Link to="/contact">Contact</Link>
                              </li>
                              <li className="p-4">
                                 <Link to="/grocery">Grocery</Link> 
                              </li>
                             <li className="p-4">Cart</li>
                             <button className="login p-4" onClick={()=>{
                                setbtnNamereact( btnNameReact=== "Login"? "Logout": "Login" );
                                }}>{btnNameReact}</button>


                         </ul>
                     </div></>
             </div>
               
          )
}

export default Header;