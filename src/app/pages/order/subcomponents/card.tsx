import { Product } from "../order.type"
import AddToCart from "./addtocart";

type prop = {
    item: Product;
    active: number | undefined;
}

const Card = ({item,active}:prop) => {

  
  return (
    <div className={`w-full lg:min-w-36 flex pb-2 h-fit flex-col gap-1 rounded-lg border-2 ${active != -1 ? 'border-emerald-300':'border-gray-300'}`}>
        <div className="w-full bg-gray-100 flex place-content-center">
            <img className="h-24 object-contain" src={item?.image || 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206'} alt="noimg"/>
        </div>
        <article className="px-2 font-medium flex flex-col gap-1 text-center">
            <p className="text-sm">{'Beverage'}</p>
            <h3 className="w-full truncate text-sm text-balance">{item?.name}sjfdoooooooooiiiiiiiiiiiiiiiiiiii</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-semibold">${item.unit_price}</span>
              <AddToCart product={item} id={active}/>
            </div>

        </article>
    </div>
  )
}

export default Card