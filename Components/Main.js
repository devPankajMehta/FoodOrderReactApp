import { useState ,useEffect } from "react";
import Service from "../Services/Service";

import IMAGEURL from "../Helpers/Constant";
import "../Asset/Styles/main.css";
import {Link} from "react-router-dom";


const Main = ()=>{
    const [restaurant,setRestaurant] =useState([]);

    useEffect(()=>{
        const data=Service.getRestaturents();       
        data.then((res)=>{
            console.log(res?.data?.cards[2]?.data?.data.cards);
            setRestaurant(res?.data?.cards[2]?.data?.data.cards);
        });
        

    },[]);


    return(
        <div className="mainDiv">
            
            {
                restaurant.map((item,index)=>{
                    
                    return(
                        (   
                           
                                                  
                            <div  className="card"> 
                             <Link to={"/restaurent/"+item?.data.id} key={index}>
                            {console.log(IMAGEURL)}
                                <div className="imageDiv">
                                    <img width="100%"  src={IMAGEURL + item.data.cloudinaryImageId}  />
                                </div>
                                </Link> 
                                <div className="resNameDeatails">
                                    {item?.data?.slugs.restaurant}
                                </div>
                                <div className="resCusineDetails"> {item?.data?.cuisines?.join(" , ")} </div>
                                <div className="cardBottomDetails">
                                    <div className="cardRating cardFlexBottomItem"><span>{item?.data?.avgRating}</span></div>
                                    <div className="cardFlexBottomItem"><span> {item?.data?.maxDeliveryTime} mins</span></div>
                                    <div className="cardFlexBottomItem"><span> {item?.data?.costForTwoString}</span></div>
                                </div>
                                
                            </div>
                            
                        )
        
                    )
                    
                })
            }
        </div>
    )
}

export default Main;