import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaDollarSign, FaHashtag, FaTag } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"
import {z} from 'zod';
import formSchema from "./formschema";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/layout/loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getCategory } from "../../order/order.service";
import { selectCategory } from "../../order/order.slice";
import { AppDispatch } from "@/app/store";
import { FaBoxArchive } from "react-icons/fa6";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CreateProduct, getProduct } from "../inventory.service";
import { toast } from "sonner";
import noimg from '@/assets/noimg.svg';


const CreateInventory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      code:"",
      type_id: '0',
      in_stock: 0,
      unit_price: 0,
      image: ''
    },
    mode:'all'
  })
  const setupCategory = useSelector(selectCategory);
  const [isSubmit, setSubmit] = useState(false);
  const [catInput,setCatInput] = useState('');
  const dispatch: AppDispatch = useDispatch();

  //image related state
  const [previewSrc, setPreviewSrc] = useState<string>('');


  const handleSubmitForm = (value: z.infer<typeof formSchema>) =>{
    setSubmit(true);
    dispatch(CreateProduct(value));

    setSubmit(false);
    setPreviewSrc("");
    dispatch(getProduct({page: 0}));
    form.reset();
  }

  const handleCreateCategory = () => {
    dispatch(createCategory({
      name: catInput,
    }));
    setTimeout(() => {
      dispatch(getCategory());
    }, 300)
  }

  function handleFileChange (e, onChange: any){
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          const base64 = event.target.result;
          setPreviewSrc(base64); // Set the preview source for displaying the image
          onChange(base64);
        }
      };
      reader.onerror = (err) => {
        toast.error('Error reading file')
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(()=>{
    const fetchCat = () =>{
      dispatch(getCategory());
    }

    fetchCat();

  },[])

  return (
    <Sheet onOpenChange={()=> form.reset()}>
        {/* click to open Sheet button that will display in component */}
        <SheetTrigger className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
          <FaPlus className="text-emerald-500" size={'0.8rem'}/>
          <span className="font-medium pl-1 text-emerald-500 text-sm">New</span>  
        </SheetTrigger>

        <SheetContent className="h-full sm:max-w-[600px] py-4 px-4 overflow-auto pb-4">
            <SheetHeader className="w-full">
                <SheetTitle className="w-4/5 truncate mb-6">Create new item</SheetTitle>


                {/* Sheet content */}
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex grow flex-col gap-3 text-slate-900">

              {/* this is the image upload preview and the upload buttom is inside the form  */}
              <img className="flex object-contain max-h-36 mb-4 aspect-square brightness-105" 
                  src={previewSrc || noimg} alt="no img"/>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-4">
                  <FormField control={form.control} name="image" render={({ field }) => (
                      <FormItem className="flex justify-center">
                          <FormControl className="flex justify-center w-fit bg-emerald-500 hover:bg-emerald-700">
                            <label htmlFor="imageUpload" 
                            className="cursor-pointer text-white text-xs font-bold py-1 px-3 rounded">
                              Choose File
                              <input
                                className="hidden"
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={(e)=>{
                                  handleFileChange(e,field.onChange);
                                }} />
                            </label>
                            
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>



                  <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <FaTag 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.name?'text-red-500':''}`}/>
                              <Input placeholder="Name" {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.name?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>



                  <div className="grid grid-cols-2 gap-2">
                    <FormField control={form.control} name="code" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormControl>
                              <div className="relative">
                                <FaHashtag
                                className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.code?'text-red-500':''}`}/>
                                <Input placeholder="Code" {...field} 
                                className={`pl-12 py-5 outline-none transition-all ${form.formState.errors.code?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                              </div>
                            </FormControl>
                            <FormMessage className="text-xs"/>
                        </FormItem>)}/>



                    <FormField control={form.control} name="in_stock" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <FaBoxArchive
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.in_stock?'text-red-500':''}`}/>
                              <Input type="number" placeholder="Stock" {...field} 
                              className={`pl-12 py-5 outline-none transition-all ${form.formState.errors.in_stock?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>
                  </div>



                  <div className="grid grid-cols-2 gap-2">
                    <FormField control={form.control} name="unit_price" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <FaDollarSign
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.unit_price?'text-red-500':''}`}/>
                              <Input type="number" placeholder="Price" {...field} 
                              className={`pl-12 py-5 outline-none transition-all ${form.formState.errors.unit_price?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>


                    <FormField control={form.control} name="type_id" render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <div className="flex gap-2 w-full">
                            <div className="relative">
                              <BiSolidCategoryAlt 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.type_id?'text-red-500':''}`}/>
                              <select className={`pl-12 py-2 w-full rounded-md px-2 bg-transparent ring-1 ring-gray-200 outline-none transition-all ${form.formState.errors.type_id?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}`} {...field} >
                                <option value="">Select a Category</option>
                                {setupCategory.data?.map((element,index)=>(
                                  <option value={element.id} key={index}>{element.name}</option>
                                ))}
                              </select>
                            </div>
                            <Dialog>
                              <DialogTrigger className="h-full px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 border border-gray-200 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                <FaPlus size={'0.7rem'}/>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                  <DialogTitle>Create new category</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="flex items-center space-x-2">
                                  <Input
                                    placeholder="Enter category name"
                                    value={catInput}
                                    onChange={(e)=>setCatInput(e.target.value)}
                                  />
                                </DialogDescription>
                                <DialogFooter className="sm:justify-start">
                                  <DialogClose onClick={()=>handleCreateCategory()}
                                    className="h-9 px-4 py-2 bg-emerald-600 text-gray-50 shadow hover:bg-emerald-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300"
                                    > Create </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs"/>
                      </FormItem>)}/>
                  </div>


                  <Button type="submit" disabled={!form.formState.isValid || isSubmit } className="bg-emerald-500 hover:bg-emerald-600 shadow-md">
                    {isSubmit? <LoadingSpinner/>:'Submit'}
                  </Button>
                </form>
              </Form>
            </div>

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