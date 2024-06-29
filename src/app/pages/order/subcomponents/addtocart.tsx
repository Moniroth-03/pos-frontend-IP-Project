import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import { Product } from "../order.type"
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectCart } from "../order.slice";

type prop = {
    product: Product;
    id: number | undefined;
}


const AddToCart = ({product,id}:prop) => {

    const cart = useSelector(selectCart);

    const dispatch = useDispatch();

    function handleClick(type: boolean){
        // adding
        if(type){
            dispatch(addCart(product));
        }else{  
            // deleting

            // making sure the count doesnt go negative
            if(cart[id]?.qty == undefined || cart[id]?.qty <= 0){
                return;
            }
            dispatch(removeCart(product));
        }
    }

    return (
        <div className="w-fit gap-2 flex items-center">
            <FaMinusCircle className="text-gray-400 cursor-pointer" onClick={()=>handleClick(false)}/>
            <span>{cart[id]?.qty || 0}</span>
            <FaPlusCircle className="text-emerald-500 cursor-pointer" onClick={()=>handleClick(true)}/>
        </div>
    )
}

export default AddToCart