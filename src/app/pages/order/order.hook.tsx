/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux"
import { Cart } from "./order.type";
import { selectCart, selectCategory, selectOrderProduct } from "./order.slice";

const useOrder = () => {
    const categories = useSelector(selectCategory);
    const products = useSelector(selectOrderProduct);
    const cart = useSelector(selectCart);

    const getCartTotalItem = (array:Cart | null) =>{
        if( array == null || array.length == 0 ) return;
        let total = 0;
        for(const i of array){
            total = total + i.qty;
        }
        return total;
    }

    const getCartTotalItemCost = (array:Cart | null) =>{
        if( array == null || array.length == 0 ) return;
        let total = 0;
        for(const i of array){
            total = total + (i.qty * i.product.unit_price);
        }
        return total;
    }

    return {
       getCartTotalItem,getCartTotalItemCost,categories,products,cart
    }
}

export default useOrder