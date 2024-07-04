import { FaHome} from "react-icons/fa";
import CreateUser from "./user.create/create.user";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import useUser from "./user.hook";
import Tablerow from "./user.components/tableRow";
import LoadingSpinner from "@/app/layout/loading/loading";
import DeleteUsers from "./user.delete/delete.user";
import UpdateUser from "./user.update/update.user";
import { selectUser } from "./user.slice";

const UserComponent = () => {

    const {
        edit,del, selectedItem,setDel,setEdit,
        handleDel,handleEdit
    } = useUser();

    const { isLoading, data } = useSelector(selectUser);
    return ( 
        <main className="w-full bg-white relative">
            <section className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                    <FaHome size={'1.1rem'}/>
                    <span>User</span>
                </div>

                <div>
                    <CreateUser/>
                </div>
            </section>


            {/* list User product */}
            {isLoading? <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center scale-75"><LoadingSpinner/></div>:
            
            <section className="mt-4 overflow-y-auto h-[70dvh]">
                <Table className="bg-white border-2 relative border-gray-200 drop-shadow-md">
                    <TableCaption>No more user data.</TableCaption>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="text-sm w-[40ch] text-slate-900 font-semibold">Name</TableHead>
                            <TableHead className="text-sm w-[20ch] text-slate-900 font-semibold">Email</TableHead>
                            <TableHead className="text-sm w-[20ch] text-slate-900 font-semibold">Phone number</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold w-[12ch]">Date</TableHead>
                            <TableHead className="w-24 text-sm text-slate-900 font-semibold text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    {isLoading? '':
                    <TableBody>
                        {/* loop table data here */}
                        {data && data?.map((item)=>(
                            <Tablerow key={item?.id}
                                    item={item}
                                    setEdit={handleEdit}
                                    setDel={handleDel} />
                        
                        ))}
                        {/* i have to place it outside of the menu because thre is an error where if menu close the sheet close too */}
                        <UpdateUser open={edit} setOpen={setEdit} data={selectedItem}/>
                        <DeleteUsers open={del} setOpen={setDel} data={selectedItem} />
                        
                    </TableBody>}

                </Table>

            </section>
            } 
        </main>
    )
}

export default UserComponent;