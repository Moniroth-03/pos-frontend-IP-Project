import { Button } from "@/components/ui/button";
import { Product } from "../order.type"
import env from "@/environments/environment"
import { useDispatch } from "react-redux";
import { addCart } from "../order.slice";
import { AppDispatch } from "@/app/store";

type prop = {
    item: Product;
    active: number | undefined;
}

const Card = ({item,active}:prop) => {
  const dispatch:AppDispatch = useDispatch();
  
  return (
    <div className={`w-full lg:min-w-36 flex pb-2 h-fit flex-col gap-1 rounded-lg border-2 transition-all ${active != -1 ? 'border-emerald-300':'border-gray-300'}`}>
        <div className="w-full bg-gray-100 flex place-content-center">
            <img className="h-24 object-contain" src={env.img_url+item.image} alt="noimg"/>
        </div>
        <article className="px-2 font-medium flex flex-col gap-1 text-center">
            <p className="text-sm">{'Beverage'}</p>
            <h3 className="w-full truncate text-sm text-balance">{item?.name}</h3>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-semibold">${item.unit_price}</span>
              <Button onClick={()=>dispatch(addCart(item))} variant={active != -1 ? "outline":"default"} className={`scale-90 px-3 ${active != -1 ? 'bg-transparent border-2 border-emerald-500':'bg-emerald-500'} hover:bg-emerald-600`}>+ Add</Button>
            </div>

        </article>
    </div>
  )
}

export default Card