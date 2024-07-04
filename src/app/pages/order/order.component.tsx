import { FaHome } from "react-icons/fa";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import useOrder from "./order.hook";
// import LoadingSpinner from "@/app/layout/loading/loading";
import Card from "./subcomponents/card";
import OrderItem from "./subcomponents/ordereditem";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { Input } from "@/components/ui/input";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { getCategory, getProductByNameOrCode } from "./order.service";
import { Link, useSearchParams } from "react-router-dom";


const Order = () => {
    const { getCartTotalItem,getCartTotalItemCost,categories,products,cart } = useOrder();
    const dispatch:AppDispatch = useDispatch();
    const [open,setOpen] = useState(false);//open close combobox of category filter
    const [value, setValue] = useState("");//active value for the filter 
    const [key,setKey] = useState("");

    // unused for now because i have solve the problem where if the page is more than 10 page it will overflow to infinite width 
    const getPagination = (totpage: number) =>{
        const content = [];
        for (let i = 1; i <= totpage ; i++){
            content.push(
            <PaginationItem>
                <PaginationLink isActive={i == products.data?.current_page} href={`?page=${i}`}>{i}</PaginationLink>
            </PaginationItem>);
        }
        return content;
    }

    //this is use to get the whole url of the browser
    const [queryParameters] = useSearchParams()

    useEffect(()=>{
        const fetchCategory = ()=>{
            dispatch(getCategory());

            // using queryParam.get('page') to get the page variable from the url which should be page=1 then dispatch it to the product action/service to call api for data
            dispatch(getProductByNameOrCode({ key: key , page: queryParameters.get('page') || '' }));
        }

        fetchCategory();
    },[queryParameters, key])
    
    return (
        <main className="w-full grid grid-cols-4">
            <div className="col-span-3">
                <section className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                        <FaHome size={'1.1rem'}/>
                        <span>Orders</span>
                    </div>
                    <div className="flex px-4 justify-end gap-2">
                        {/* search bar input */}
                        <div className="w-fit relative">
                            <FaMagnifyingGlass size={'0.8rem'} className="absolute text-gray-600 left-4 bottom-1/2 translate-y-1/2"/>
                            <Input value={key} onChange={(e)=>{
                                    setKey(e.target.value);
                                    if(key.length >0){
                                        setValue("");
                                    }
                                    // dispatch(getProductByNameOrCode({ key: e.target.value, page: products.data?.current_page || '' }));
                                }} 
                                className="pl-10" type="text" placeholder="Search product..."/>
                        </div>



                        {/* category filter */}
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between"
                                >
                                {value
                                    ? categories.data?.find((i) => i.name == value)?.name
                                    : "Select category..."}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                <CommandInput placeholder="Search category..." className="h-9" />
                                <CommandList>
                                    <CommandEmpty>No Category found.</CommandEmpty>
                                    <CommandGroup>
                                    {categories.data?.map((cat) => (
                                        <CommandItem
                                        key={cat.id}
                                        value={cat.name}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue == value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                        >
                                        {cat.name}
                                        <CheckIcon
                                            className={cn("ml-auto h-4 w-4",value == cat.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        </CommandItem>
                                    ))}
                                    </CommandGroup>
                                </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </section>


                <section className="py-2 w-full mt-6 h-full max-h-[75%]">
                    

                    {/* list item */}
                    <ul className="grid grid-cols-5 gap-4 h-full pr-4 mb-4 overflow-auto">
                        {
                          !products.isLoading && products.data?.data?.map((item,i)=>(
                            <Card key={i} item={item} category={item.type?.name || 'beer'} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                          ))
                        }
                    </ul>
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
                        {
                        !products.isLoading && 
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <Link to={`?page=${ products?.data?.current_page - 1 > 1 ? products?.data?.current_page - 1 : 1}`}><PaginationPrevious/></Link>
                                    </PaginationItem>

                                    {/* {
                                    products.data?.total != undefined && getPagination(products?.data?.last_page) 
                                    } */}
                                    
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>

                                    <PaginationItem>
                                        <Link to={`?page=${ products?.data?.current_page + 1 > products.data?.last_page? products.data?.last_page : products?.data?.current_page + 1}`}><PaginationNext/></Link>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        }
                    </div>
                </section>
            </div>





                            
            {/* order detail on the right side */}
            <section className="bg-gray-100 rounded-lg">
                <div className="w-full flex justify-between gap-2 p-4">
                    <p>Ordered items</p>
                    <p>Total: { getCartTotalItem(cart) || 0 }x</p>
                </div>
                {/* list cart item curently in the cart it is also responsive to the order product list if u add or delete it will reflect realtime */}
                
                <div className="flex flex-col px-2 h-1/2 overflow-y-auto grow overflow-x-hidden pr-2">
                    {
                        cart?.map((element,index)=>(
                            <OrderItem items={element} key={index} active={index}/>
                        ))
                    }
                </div>

                {/* this is the receipt detail  */}
                <div className="mt-2">
                    <div className="flex justify-between px-2">
                        <p>Total</p>
                        <p>${getCartTotalItemCost(cart) || 0}</p>
                    </div>
                    <div className="flex justify-between px-2">
                        <p>Discount</p>
                        <p>{50}%</p>
                    </div>
                    <div className="flex justify-between px-2">
                        <p>Tax</p>
                        <p>${ ( getCartTotalItemCost(cart) || 0 ) * 0.01 } </p>
                    </div>
                    <div className="flex justify-between px-2 pt-2 mt-2 border-t border-t-gray-200">
                        <p>Tax</p>
                        <p className="font-medium">${ ((( getCartTotalItemCost(cart) || 0 ) + ( getCartTotalItemCost(cart) || 0 ) * 0.01) * 0.5).toFixed(2) } </p>
                    </div>
                    <div className="mx-4 mt-4">
                        <Button variant="default" className="w-full bg-emerald-600 hover:bg-emerald-700">Order</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Order;