/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { memo } from "react";
import { Sale } from "./order_detail.type";
import { Link } from "react-router-dom";

type props = {
    item: Sale;
    setView?: any;
    setEdit?: any;
    setDel?: any;
}


const Tablerow = memo(({ item }: props) => {
    return (
        <TableRow>
            <TableCell className="px-2 py-4 relative">
                {/* <img src={env.img_url + item.image} alt="no img" className="w-12 aspect-square object-contain absolute top-1/2 -translate-y-1/2 rounded-lg"/> */}
                <span className="text-sm w-[30ch] truncate">{ item?.receipt_number}</span>
            </TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item?.cashier.name? item?.cashier.name :''}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">${item?.total_price}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item?.details.length}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item?.ordered_at.toString()}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">
                <Link className="hover:underline hover:text-emerald-500" to={item.id.toString()}>view</Link>
            </TableCell>
            {/* <TableCell className="text-sm text-gray-500 flex py-4">
                <span className="text-sm w-[27ch] truncate">chharngchhit</span>
            </TableCell> */}

            {/* <TableCell className="text-sm flex justify-center py-4 relative">
                <DropdownMenu>
                    <DropdownMenuTrigger className="px-3 py-2 hover:bg-gray-200 rounded-full">
                        <BsThreeDotsVertical/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Action</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={()=>setView(true,item)}>                                 
                            <FaRegEye className="text-blue-500" size={'1rem'}/>
                            <span className="font-medium pl-2 text-blue-500 text-sm">View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={()=>setEdit(true,item)}>
                            <BsPencilSquare className="text-slate-500" size={'1rem'}/>
                            <span className="font-medium pl-2 text-slate-500 text-sm">Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={()=>setDel(true,item)}>
                            <FaRegTrashAlt className="text-red-500" size={'1rem'}/>
                            <span className="font-medium pl-2 text-red-500 text-sm">Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell> */}
        </TableRow>
  )
});

export default Tablerow;