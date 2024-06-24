import { useState } from "react"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Product } from "../order.type"
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectCart } from "../order.slice";

type prop = {
    product: Product;
}

// Note
// variable name that has cart in it will be for cart related data since product and cart product has different data format
// anything else is not cart related, pls keep it in mind since it might be confusing since item and product are thrown all over the place
const AddToCart = ({product}:prop) => {

    const cart = useSelector(selectCart);

    const dispatch = useDispatch();

    const findCartItem = (item: Product)=> {
        const prod = cart?.items.find(prod => prod.product.id == item.id);
        return prod;
    }
    const [cartItem,setCartItem] = useState(findCartItem(product));

    function handleClick(type: boolean){
        // adding
        if(type){
            dispatch(addCart(product));
        }else{  
            // deleting

            // making sure the count doesnt go negative
            if(cartItem?.qty == undefined || cartItem?.qty <= 0){
                return;
            }
            dispatch(removeCart(product));
        }
        setCartItem(findCartItem(product))
    }

    return (
        <div className="w-fit gap-2 flex items-center">
            <FaMinusCircle className="text-gray-400 cursor-pointer" onClick={()=>handleClick(false)}/>
            <span>{cartItem?.qty || 0}</span>
            <FaPlusCircle className="text-emerald-500 cursor-pointer" onClick={()=>handleClick(true)}/>
        </div>
    )
}

export default AddToCart