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
import { user } from "../user.type";
import env from "@/environments/environment";

type props = {
    item: user;
    setView: any;
    setEdit: any;
    setDel: any;
}


const Tablerow = memo(({ item, setView, setEdit, setDel }: props) => {
    return (
        <TableRow>
            <TableCell className="px-2 py-4 relative">
                <img src={env.img_url + item.avatar} alt="no img" className="w-12 aspect-square object-contain absolute top-1/2 -translate-y-1/2 rounded-lg"/>
                <div className="ml-14 flex flex-col">
                    <span className="text-sm w-[30ch] truncate font-medium">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.role.name}</span>
                </div>
            </TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.email}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.phone}</TableCell>
            <TableCell className="text-sm text-gray-500 py-4">{item.phone}</TableCell>
            {/* <TableCell className="text-sm text-gray-500 py-4">{ item.created_at.toString() }</TableCell> */}
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