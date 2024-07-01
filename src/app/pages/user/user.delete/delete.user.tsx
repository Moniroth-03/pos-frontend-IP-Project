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
import { DeleteUser } from "../user.service";
import { user } from "../user.type";
import { AppDispatch } from "@/app/store";

type props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setOpen: any;
  data: user | null;
}

const DeleteUsers = ({open,setOpen,data}:props) => {

  const dispatch:AppDispatch = useDispatch();

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>

        <AlertDialogHeader>
          <div className="flex gap-2">
            <div>
              <AlertDialogTitle>Delete item <span className="text-red-600">{ data?.name }</span></AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently remove this item. Are you Sure?
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-500 hover:bg-red-600" onClick={()=>dispatch(DeleteUser(data.id))}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteUsers;