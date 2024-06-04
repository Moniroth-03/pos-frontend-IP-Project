import { FaHome, FaRegEye, FaRegTrashAlt} from "react-icons/fa";
import { BsPencilSquare, BsThreeDotsVertical, } from "react-icons/bs";
import CreateInventory from "./inventory.create/create.inventory";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSelector } from "react-redux";
import { selectInventory } from "./inventory.slice";
import useInventory from "./inventory.hook";
import ViewInventory from "./inventory.view/view.inventory";
import UpdateInventory from "./inventory.update/update.inventory";
import DeleteInventory from "./inventory.delete/delete.inventory";

const InventoryComponent = () => {

    const {view,edit,del,setView,setEdit,setDel} = useInventory();
    const { isLoading, data } = useSelector(selectInventory);

    return (
        <main className="w-full">
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
            {isLoading?<div>loading........</div>:
            
            <section className="mt-4">
                <Table className="bg-white min-h-full border-2 border-gray-200 drop-shadow-md">
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
                        <TableRow>
                            <TableCell className="px-2 py-3 flex gap-2">
                                <img src="" alt="no img"/>
                                <span className="text-sm w-[30ch] truncate">Coca Cola</span>
                            </TableCell>
                            <TableCell className="text-sm text-gray-500">12345</TableCell>
                            <TableCell className="text-sm text-gray-500">$2.5</TableCell>
                            <TableCell className="text-sm text-gray-500">24</TableCell>
                            <TableCell className="text-sm text-gray-500">Beverage</TableCell>
                            <TableCell className="text-sm text-gray-500 flex">
                                <span className="text-sm w-[27ch] truncate">Coca Colasfddddddddddddddddddddddddddddddsfssssfsfsfssfddddddddddddddddsssssssssssssssssssssssssssssssssss</span>
                            </TableCell>
                            <TableCell className="text-sm text-gray-500">24/09/2024</TableCell>
                            <TableCell className="text-sm flex justify-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant={"ghost"} className="rounded-full">
                                            <BsThreeDotsVertical/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onSelect={()=>setView(true)}>                                 
                                            <FaRegEye className="text-blue-500" size={'1rem'}/>
                                            <span className="font-medium pl-2 text-blue-500 text-sm">View</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={()=>setEdit(true)}>
                                            <BsPencilSquare className="text-slate-500" size={'1rem'}/>
                                            <span className="font-medium pl-2 text-slate-500 text-sm">Edit</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onSelect={()=>setDel(true)}>
                                            <FaRegTrashAlt className="text-red-500" size={'1rem'}/>
                                            <span className="font-medium pl-2 text-red-500 text-sm">Delete</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                    {/* i have to place it outside of the menu because thre is an error where if menu close the sheet close too */}
                                    <ViewInventory open={view} setOpen={setView}/>
                                    <UpdateInventory open={edit} setOpen={setEdit} />
                                    <DeleteInventory open={del} setOpen={setDel} />
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </Table>

            </section>}
        </main>
    )
}

export default InventoryComponent