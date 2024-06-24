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
import LoadingSpinner from "@/app/layout/loading/loading";

const InventoryComponent = () => {

    const {
        view,edit,del, selectedItem,
        handleDel,handleEdit,handleView,
        setDel,setEdit,setView
    } = useInventory();

    const { isLoading, data } = useSelector(selectInventory);
    return ( 
        <main className="w-full bg-white">
            <section className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                    <FaHome size={'1.1rem'}/>
                    <span>Inventory</span>
                </div>

                <div>
                    <CreateInventory/>
                </div>
            </section>


            {/* list inventory product */}
            {isLoading?<LoadingSpinner/>:
            
            <section className="mt-4 overflow-y-auto h-[70dvh]">
                <Table className="bg-white border-2 border-gray-200 drop-shadow-md">
                    <TableCaption>A list of inventory stock item.</TableCaption>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="text-sm w-[40ch] text-slate-900 font-semibold">Product</TableHead>
                            <TableHead className="text-sm w-[10ch] text-slate-900 font-semibold">Code</TableHead>
                            <TableHead className="text-sm w-[12ch] text-slate-900 font-semibold">Price</TableHead>
                            <TableHead className="text-sm w-[10ch] text-slate-900 font-semibold">In Stock</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Category</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold w-[28ch]">Supplier</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold w-[12ch]">Date</TableHead>
                            <TableHead className="w-24 text-sm text-slate-900 font-semibold text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>


                    <TableBody>
                        {/* loop table data here */}
                        {data.map((item)=>(
                            <Tablerow key={item?.id}
                                    item={item}
                                    setView={handleView}
                                    setEdit={handleEdit}
                                    setDel={handleDel} />
                        
                        ))}
                        {/* i have to place it outside of the menu because thre is an error where if menu close the sheet close too */}
                    
                        <ViewInventory open={view} setOpen={setView} data={selectedItem} />
                        <UpdateInventory open={edit} setOpen={setEdit} data={selectedItem}/>
                        <DeleteInventory open={del} setOpen={setDel} data={selectedItem} />
                        
                    </TableBody>

                </Table>

            </section>}
        </main>
    )
}

export default InventoryComponent