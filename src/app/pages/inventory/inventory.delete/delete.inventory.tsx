import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDispatch } from "react-redux";
import { DeleteProduct, getProduct } from "../inventory.service";
import { inventory } from "../inventory.type";
import { AppDispatch } from "@/app/store";

type props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
  data: inventory | null;
}

const DeleteInventory = ({open,setOpen,data}:props) => {

  const dispatch:AppDispatch = useDispatch();
  const handleDelete = (id: number) =>{
    try { 
      dispatch(DeleteProduct(id));
      dispatch(getProduct());
    }catch(e){ /* empty */ }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>

        <AlertDialogHeader>
          <div className="flex gap-2">
            <div>
              <AlertDialogTitle>Delete item <span className="text-red-600">{ data?.id }</span></AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently remove this item. Are you Sure?
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={()=>handleDelete(data.id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteInventory