/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { user } from "../user.type";

type props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
  data: user | null;
}

const ViewUser = ({open,setOpen,data}:props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>

        <SheetContent className="h-full sm:max-w-[600px] pt-4 px-4">
            <SheetHeader className="w-full">
                <SheetTitle className="w-4/5 truncate mb-6">Item details</SheetTitle>


                {/* Sheet content */}
                <SheetDescription className="flex grow flex-col gap-3">

                    <img className="flex object-contain max-h-36 mb-2 aspect-square drop-shadow-lg brightness-105 rounded-lg bg-gray-300 w-fit self-center" src={data?.image} alt="no img"/>

                    <strong className="border-b text-slate-900 border-b-gray-300 py-2 text-center w-full">Product detail</strong>
                    <section className="grid grid-cols-2 px-2"> 
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
                        <span className="text-sm">{(Math.random()*100).toFixed(0)}</span>
                        <span className="text-sm">${data?.unit_price}</span>
                      </div>
                    </section>


                    <strong className="border-b border-b-gray-300 text-slate-900 py-2 text-center w-full">Product activity</strong>
                    <section className="grid grid-cols-2 px-2"> 
                      <div className="text-start text-slate-900 font-medium flex flex-col gap-4">
                        <span className="text-sm"> Product added date: </span>
                        <span className="text-sm">Product recent update date:</span>
                        <span className="text-sm">Supplier:</span>
                      </div>
                      <div className="text-end flex flex-col gap-4 text-gray-500">
                        <span className="text-sm">{data?.created_at.toString()}</span>
                        <span className="text-sm">{data?.updated_at.toString()}</span>
                        <span className="text-sm">{data?.name}</span>
                      </div>
                    </section>
                </SheetDescription>



            </SheetHeader>

            <SheetClose asChild className="w-fit absolute top-3 right-3 z-10">
                <Button type="button" variant="outline">
                  <IoCloseSharp className="text-emerald-500"/>
                  <span className="text-emerald-500 font-medium text-sm">Close</span>
                </Button>
          </SheetClose>
        </SheetContent>
    </Sheet>
  )
}

export default ViewUser;