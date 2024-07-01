/* eslint-disable @typescript-eslint/no-explicit-any */

import {  FaRegEye, FaRegTrashAlt} from "react-icons/fa";
import { BsPencilSquare, BsThreeDotsVertical, } from "react-icons/bs";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { memo } from "react";
import { inventory } from "../inventory.type";
import env from "@/environments/environment";

type props = {
    item: inventory;
    setView: any;
    setEdit: any;
    setDel: any;
}


const Tablerow = memo(({ item, setView, setEdit, setDel }: props) => {
    return (
        <TableRow>
            <TableCell className="px-2 py-4 relative">
                <img src={env.img_url + item.image} alt="no img" className="w-12 aspect-square object-contain absolute top-1/2 -translate-y-1/2 rounded-lg"/>
                <span className="text-sm w-[30ch] truncate ml-14">{ item.name}</span>
            </TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.code}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">${item.unit_price}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.in_stock}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.type.name}</TableCell>
            <TableCell className="text-sm text-gray-500 flex py-4">
                <span className="text-sm w-[27ch] truncate">chharngchhit</span>
            </TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{ item.updated_at.toString().split('T',1) }</TableCell>
            <TableCell className="text-sm flex justify-center py-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant={"ghost"} className="rounded-full">
                            <BsThreeDotsVertical/>
                        </Button>
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
            </TableCell>
        </TableRow>
  )
});

export default Tablerow;