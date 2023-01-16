import { useParams } from "react-router-dom";
import Service from "../Services/Service";
import { useState ,useEffect } from "react";
import IMAGEURL from "../Helpers/Constant";


const Menu = ()=>{

    const param=useParams();
    const [restaurant,setRestaurant]=useState([]);
    const [restaurantName,setRestaurantName]=useState([]);

    useEffect(()=>{
        const data=Service.getRestaurentDetails(param?.id);       
        data.then((res)=>{
            setRestaurantName(res?.data?.cloudinaryImageId);
            setRestaurant(Object.values(res?.data?.menu?.items));
        });

        
        

    },[]);
    

    return(
        <div>
            <div className="imageDiv">

                <div>
                <img width="100%"  src={IMAGEURL + restaurantName}  />
                </div>
                <div>
                <div>Menu Items</div>
                                    <ul>
                                    {
                                    restaurant.map((item)=>{
                                             return(
                                                 <li>{item.name}</li>
                                             )
                                    })
                                }
                                    </ul>
                </div>
                                    

                                    
              </div>
        </div>
    )

}


export default Menu;