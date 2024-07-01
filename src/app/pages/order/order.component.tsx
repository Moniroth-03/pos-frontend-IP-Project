import { FaHome } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useOrder from "./order.hook";
import { selectCart, selectCategory, selectOrderProduct } from "./order.slice";
import { useSelector } from "react-redux";
import LoadingSpinner from "@/app/layout/loading/loading";
import Card from "./subcomponents/card";
import OrderItem from "./subcomponents/ordereditem";
import { Button } from "@/components/ui/button";

const Order = () => {
    const { onTabChange,active,getCartTotalItem,getCartTotalItemCost } = useOrder();

    const categories = useSelector(selectCategory);
    const products = useSelector(selectOrderProduct);
    const cart = useSelector(selectCart);

    return (
        <main className="w-full grid grid-cols-4">
            <div className="col-span-3">
                <section className="flex justify-between w-full">
                    <div className="flex gap-2 items-center">
                        <FaHome size={'1.1rem'}/>
                        <span>Orders</span>
                    </div>
                </section>


                {/* list tab and data */}
                <section className="py-2 w-full">
                    <h1 className="font-semibold text-xl mb-4">Categories</h1>
                    
                    <div>
                        {categories.isLoading? <LoadingSpinner/>:
                        <Tabs defaultValue="1">
                            <TabsList className="overflow-clip w-fit h-fit pb-[1.6px]">
                                {categories?.data?.map((item,key)=>(
                                    <TabsTrigger key={key} value={item.id.toString()} onClick={()=>onTabChange(item.id)}>{item.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            

                            <TabsContent value={active}>
                                {products?.isLoading? <LoadingSpinner/>:
                                <ul className="grid grid-cols-5 gap-4 pr-4 overflow-auto">
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                                    ))}
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                                    ))}
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                                    ))}
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                                    ))}
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.findIndex(prod => prod.product.id == item.id)}/>
                                    ))}
                                </ul>
                                }
                            </TabsContent>
                        </Tabs>
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