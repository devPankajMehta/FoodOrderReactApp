import { useSelector } from "react-redux";

const Cart= () => {

    const cartItems=useSelector((state)=>state.cart.items);

    console.log(cartItems);
    return(
        <div>
            {cartItems.map((item)=>{
                return(
                    <div>
                        {item.name}
                        {item.price}
                        </div>
                )
            })}
        </div>
    )
}

export default Cart;