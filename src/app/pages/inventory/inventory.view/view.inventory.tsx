/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { inventory } from "../inventory.type";
import env from "@/environments/environment";

type props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
  data: inventory | null;
}

const ViewInventory = ({open,setOpen,data}:props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>

        <SheetContent className="h-full sm:max-w-[600px] pt-4 px-4">
            <SheetHeader className="w-full">
                <SheetTitle className="w-4/5 truncate mb-6">Item details</SheetTitle>


                {/* Sheet content */}
                <SheetDescription></SheetDescription>

            </SheetHeader>
            <div className="flex grow flex-col gap-3">
              <img className="flex object-contain max-h-36 mb-2 aspect-square drop-shadow-lg brightness-105 rounded-lg bg-gray-100 w-fit self-center" 
                src={env.img_url + data?.image} alt="no img"/>

                <strong className="border-b text-slate-900 border-b-gray-300 py-2 text-center w-full">Product detail</strong>
                <div className="grid grid-cols-2 px-2"> 
                  <div className="text-start text-slate-900 font-medium flex flex-col gap-4">
                    <span className="text-sm"> Product name: </span>
                    <span className="text-sm">Code:</span>
                    <span className="text-sm">Category:</span>
                    <span className="text-sm">In stock:</span>
                    <span className="text-sm">Price:</span>
                  </div>
                  <div className="text-end flex flex-col gap-4 text-gray-500">
                    <span className="text-sm">{data?.name}</span>
                    <span className="text-sm">{data?.code}</span>
                    <span className="text-sm">{data?.type.name}</span>
                    <span className="text-sm">{data?.in_stock}</span>
                    <span className="text-sm">${data?.unit_price}</span>
                  </div>
                </div>


                <strong className="border-b border-b-gray-300 text-slate-900 py-2 text-center w-full">Product activity</strong>
                <div className="grid grid-cols-2 px-2"> 
                  <div className="text-start text-slate-900 font-medium flex flex-col gap-4">
                    <span className="text-sm"> Product added date: </span>
                    <span className="text-sm">Product recent update date:</span>
                    <span className="text-sm">Supplier:</span>
                  </div>
                  <div className="text-end flex flex-col gap-4 text-gray-500">
                    <span className="text-sm">{data?.created_at.toString().split('T',1)}</span>
                    <span className="text-sm">{data?.updated_at.toString().split('T',1)}</span>
                    <span className="text-sm">{data?.name}</span>
                  </div>
                </div>
            </div>
            <SheetClose className="w-fit absolute top-3 right-3 z-10 focus-visible:ring-0">
                  <div className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                    <IoCloseSharp className="text-emerald-500"/>
                    <span className="text-emerald-500 font-medium text-sm">Close</span>
                  </div>
          </SheetClose>
        </SheetContent>
    </Sheet>
  )
}

export default ViewInventory