import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";


const CreateInventory = () => {
  return (
    <Dialog>
        {/* click to open dialog button that will display in component */}
        <DialogTrigger asChild>
            <Button variant="outline">
                <FaPlus className="text-emerald-500"/>
                <span className="font-medium pl-1 text-emerald-500 text-base">new</span>
            </Button>
        </DialogTrigger>

        <DialogContent className="h-full w-fit px-4">
            <DialogHeader>
                <DialogTitle className="w-4/5 truncate">Create Items</DialogTitle>


                
                {/* dialog content */}
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>




            </DialogHeader>

            <DialogClose asChild className="w-fit absolute top-3 right-3 z-10">
                <Button type="button" variant="outline">
                Close
                </Button>
          </DialogClose>
        </DialogContent>
    </Dialog>
  )
}

export default CreateInventory