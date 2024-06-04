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

type props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
}

const DeleteInventory = ({open,setOpen}:props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>

        <SheetContent className="h-full pt-4 px-4">
            <SheetHeader>
                <SheetTitle className="w-4/5 truncate mb-6">Product name</SheetTitle>


                
                {/* Sheet content */}
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
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

export default DeleteInventory