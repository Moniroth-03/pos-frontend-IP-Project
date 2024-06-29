import { Product } from "../order.type"
import AddToCart from "./addtocart";

type props = {
    items: {
        product: Product;
        qty: number;
    }
    active: number;
}

const OrderItem = ({items,active}:props) => {
  return (
    <div className="w-full bg-white rounded-sm flex gap-2 pr-2">
        <img src={items.product.image || 'https://greensessentials.co.uk/cdn/shop/files/MOU01_800x800_48ff04e0-1b27-4eeb-b47a-0002aaf02595.png?v=1713269204'} 
        className="w-14 aspect-square h-full bg-gray-50 rounded-sm p-1"/>
        <div className="flex grow flex-col py-1 justify-between gap-2">
            <p className="text-sm">{items.product.name}</p>
            <p className="text-sm font-medium">${items.product.unit_price}</p>
        </div>
        <AddToCart product={items.product} id={active}/>
    </div>
  )
}

export default OrderItem