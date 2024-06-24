import { FaHome } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useOrder from "./order.hook";
import { selectCart, selectCategory, selectOrderProduct } from "./order.slice";
import { useSelector } from "react-redux";
import LoadingSpinner from "@/app/layout/loading/loading";
import Card from "./subcomponents/card";

const Order = () => {
    const { onTabChange,active } = useOrder();

    const categories = useSelector(selectCategory);
    const products = useSelector(selectOrderProduct);
    const cart = useSelector(selectCart);

    return (
        <main className="w-full grid grid-cols-3">
            <div className="col-span-2">
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
                        <Tabs defaultValue="0">
                            <TabsList className="overflow-clip h-fit pb-[1.6px]">
                                <TabsTrigger value="0" onClick={()=>onTabChange(0)}>All</TabsTrigger>
                                {categories?.data?.map((item,key)=>(
                                    <TabsTrigger key={key} value={item.id.toString()} onClick={()=>onTabChange(item.id)}>{item.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            

                            <TabsContent value={active}>
                                {products?.isLoading? <LoadingSpinner/>:
                                <ul className="grid grid-cols-5 gap-4">
                                    {products.data?.map((item,key)=>(
                                        <Card key={key} item={item} active={cart?.items.findIndex(prod => prod.product.id == item.id) == -1 ? false : true}/>
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
            <section className="bg-white rounded-l-lg">

            </section>
        </main>
    )
}

export default Order;