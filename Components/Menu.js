import { useParams } from "react-router-dom";
import Service from "../Services/Service";
import { useState ,useEffect } from "react";
import IMAGEURL from "../Helpers/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Helpers/cartSlice";


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

    const dispatch =useDispatch();

    const handelAddItem =(item)=>{
      
        dispatch(addItem(item));

    }
    

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
                                                 <li>{item.name}  <button onClick={()=>{handelAddItem(item)}}>add</button></li>
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