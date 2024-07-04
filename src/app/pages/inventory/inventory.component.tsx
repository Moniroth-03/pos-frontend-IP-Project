import { FaHome} from "react-icons/fa";
import CreateInventory from "./inventory.create/create.inventory";
import ViewInventory from "./inventory.view/view.inventory";
import UpdateInventory from "./inventory.update/update.inventory";
import DeleteInventory from "./inventory.delete/delete.inventory";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { selectInventory } from "./inventory.slice";
import useInventory from "./inventory.hook";
import Tablerow from "./inventory.components/tableRow";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import LoadingSpinner from "@/app/layout/loading/loading";
// import LoadingSpinner from "@/app/layout/loading/loading";

const InventoryComponent = () => {

    const {
        view,edit,del, selectedItem,
        handleDel,handleEdit,handleView,
        setDel,setEdit,setView
    } = useInventory();

    const { isLoading, data } = useSelector(selectInventory);
    return ( 
        <div className="w-full bg-white">
            <div className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                    <FaHome size={'1.1rem'}/>
                    <span>Inventory</span>
                </div>

                <div>
                    <CreateInventory/>
                </div>
            </div>


            {/* list inventory product */}
            
            <div className="mt-4 overflow-y-auto h-[74dvh]">
                {isLoading? <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center scale-75"><LoadingSpinner/></div>:
                <Table className="bg-white relative border-2 h-[74dvh] border-gray-200 drop-shadow-md">
                    {data && 
                    <TableCaption>
                        {data?.current_page + 1 > data?.last_page? 'No more inventory data.' : 'More data on the next page'}
                        
                    </TableCaption>
                    }
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="text-sm min-w-[40ch] text-slate-900 font-semibold">Product</TableHead>
                            <TableHead className="text-sm w-[10ch] text-slate-900 font-semibold">Code</TableHead>
                            <TableHead className="text-sm w-[12ch] text-slate-900 font-semibold">Price</TableHead>
                            <TableHead className="text-sm w-[10ch] text-slate-900 font-semibold">In Stock</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Category</TableHead>
                            {/* <TableHead className="text-sm text-slate-900 font-semibold w-[24ch]">Supplier</TableHead> */}
                            <TableHead className="text-sm text-slate-900 font-semibold w-[12ch]">Date</TableHead>
                            <TableHead className="w-24 text-sm text-slate-900 font-semibold text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>


                    
                    <TableBody>
                        {/* loop table data here */}
                        {data?.data?.map((item)=>(
                            <Tablerow key={item?.id}
                                    item={item}
                                    setView={handleView}
                                    setEdit={handleEdit}
                                    setDel={handleDel} />
                        
                        ))}
                        
                        
                    </TableBody>

                    {/* i have to place it outside of the menu because thre is an error where if menu close the sheet close too */}            
                    <ViewInventory open={view} setOpen={setView} data={selectedItem} />
                    <UpdateInventory open={edit} setOpen={setEdit} data={selectedItem}/>
                    <DeleteInventory open={del} setOpen={setDel} data={selectedItem} />
                </Table>}
            </div>
            {data && 
                <Pagination>
                    <PaginationContent className="fixed bottom-4">
                        <PaginationItem>
                            <Link className="flex gap-1 pr-2.5 items-center font-medium rounded-md hover:bg-gray-100 py-1 px-2" to={`?page=${ data?.current_page - 1 > 1 ? data?.current_page - 1 : 1}`}>
                                <ChevronLeftIcon className="h-4 w-4" />
                                <span>Previous</span>
                            </Link>
                        </PaginationItem>

                        {/* {
                        products.data?.total != undefined && getPagination(products?.data?.last_page) 
                        } */}
                        
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <Link className="flex gap-1 pl-2.5 items-center font-medium rounded-md hover:bg-gray-100 py-1 px-2" to={`?page=${ data?.current_page + 1 > data?.last_page? data?.last_page : data?.current_page + 1}`}>                                                                        
                                <span>Next</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Link>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>}
        </div>
    )
}

export default InventoryComponent;