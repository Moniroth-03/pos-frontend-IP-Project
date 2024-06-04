import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const CreateInventory = () => {
  return (
    <Sheet>
        {/* click to open Sheet button that will display in component */}
        <SheetTrigger asChild>
            <Button variant="outline">
                <FaPlus className="text-emerald-500" size={'0.8rem'}/>
                <span className="font-medium pl-1 text-emerald-500 text-sm">New</span>
            </Button>
        </SheetTrigger>

        <SheetContent className="h-full pt-4 px-4">
            <SheetHeader>
                <SheetTitle className="w-4/5 truncate mb-6">Create Items</SheetTitle>


                
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

export default CreateInventory