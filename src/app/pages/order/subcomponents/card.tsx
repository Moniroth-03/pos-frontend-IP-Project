import { Button } from "@/components/ui/button";
import { Product } from "../order.type"
import env from "@/environments/environment"
import { useDispatch } from "react-redux";
import { addCart } from "../order.slice";
import { AppDispatch } from "@/app/store";

type prop = {
    item: Product;
    active: number | undefined;
    category: string | null | undefined;
}

const Card = ({item,active,category}:prop) => {
  const dispatch:AppDispatch = useDispatch();
  
  return (
    <div className={`relative lg:max-h-60 pb-12 w-full lg:min-w-36 flex h-full flex-col gap-1 rounded-lg border-2 transition-all ${active != -1 ? 'border-emerald-300 border-[3px]':'border-gray-300'}`}>
        <div className="w-full bg-gray-100 flex place-content-center">
            <img className="h-24 object-contain" src={env.img_url+item.image} alt="noimg"/>
        </div>
        <div className="px-2 font-medium flex flex-col gap-1 text-center">
            <p className="text-sm">{category || ''}</p>
            <h3 className="w-full truncate text-sm text-balance">{item?.name}</h3>
            <div className="flex justify-between w-full pr-3 items-center absolute bottom-1">
              <span className="text-sm font-semibold">${item.unit_price}</span>
              <Button onClick={()=>dispatch(addCart(item))} variant={active != -1 ? "outline":"default"} className={`scale-90 px-3 ${active != -1 ? 'bg-transparent border-2 border-emerald-500':'bg-emerald-500'} hover:bg-emerald-600`}>+ Add</Button>
            </div>

        </div>
    </div>
  )
}

export default Card