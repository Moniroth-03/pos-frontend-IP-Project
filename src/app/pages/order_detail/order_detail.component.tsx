import { FaHome} from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import Tablerow from "./tableRow";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import LoadingSpinner from "@/app/layout/loading/loading";
import { selectSale } from "./order_detail.slice";
import { useEffect } from "react";
import { AppDispatch } from "@/app/store";
import { getSale } from "./order.service";
// import LoadingSpinner from "@/app/layout/loading/loading";

const SaleComponent = () => {
    const dispatch:AppDispatch = useDispatch();
    const [paramurl] = useSearchParams();

    useEffect(()=>{
        const fetch = ()=>{
            dispatch(getSale({page: paramurl.get('page') || ''}));
        }

        fetch();
    },[paramurl])
    

    const { isLoading, data } = useSelector(selectSale);
    return ( 
        <div className="w-full bg-white">
            <div className="flex justify-between w-full">
                <div className="flex gap-2 items-center">
                    <FaHome size={'1.1rem'}/>
                    <span>Sale</span>
                </div>

                <div>
                    {/* <CreateInventory/> */}
                </div>
            </div>


            {/* list inventory product */}
            
            <div className="mt-4 overflow-y-auto h-[74dvh]">
                {isLoading? <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center scale-75"><LoadingSpinner/></div>:
                <Table className="bg-white relative border-2 border-gray-200 drop-shadow-md">
                    {/* {data && 
                    <TableCaption>
                        {data?.current_page + 1 > data?.last_page? 'No more inventory data.' : 'More data on the next page'}
                        
                    </TableCaption>
                    } */}
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="text-sm text-slate-900 font-semibold">Receipt_number</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Cashier</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Total Price</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Total Item</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Order Date</TableHead>
                            <TableHead className="text-sm text-slate-900 font-semibold">Action</TableHead>
                            {/* <TableHead className="w-24 text-sm text-slate-900 font-semibold text-center">Action</TableHead> */}
                        </TableRow>
                    </TableHeader>


                    
                    <TableBody>
                        {/* loop table data here */}
                        {data && data?.data?.map((item)=>(
                            <Tablerow key={item?.id}
                                    item={item}
                                    />
                        
                        ))}
                        
                        
                    </TableBody>

                </Table>}
            </div>
            {data && 
                <Pagination>
                    <PaginationContent className="fixed bottom-4">
                        <PaginationItem>
                            <Link className="flex gap-1 pr-2.5 items-center font-medium rounded-md hover:bg-gray-100 py-1 px-2" to={`?page=${ data?.current_page - 1 > 1 ? data?.current_page - 1 : 1}`}>
                                <ChevronLeftIcon className="h-4 w-4" />
                                <span>Previous</span>
                            </Link>
                        </PaginationItem>

                        {/* {
                        products.data?.total != undefined && getPagination(products?.data?.last_page) 
                        } */}
                        
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                            <Link className="flex gap-1 pl-2.5 items-center font-medium rounded-md hover:bg-gray-100 py-1 px-2" to={`?page=${ data?.current_page + 1 > data?.last_page? data?.last_page : data?.current_page + 1}`}>                                                                        
                                <span>Next</span>
                                <ChevronRightIcon className="h-4 w-4" />
                            </Link>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>}
        </div>
    )
}

export default SaleComponent;