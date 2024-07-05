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
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { FaPhone, FaUser } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"
import {z} from 'zod';
import formSchema from "./formschema";
import { useState } from "react";
import LoadingSpinner from "@/app/layout/loading/loading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { CreateUser as CreateUsers, getUser } from "../user.service";
import userimg from '@/assets/user.svg';
import { toast } from "sonner";


const CreateUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: '',
      phone: '',
      password: '',
      password_confirmation: '',
      users_type: 2,
      avatar: '',
    },
    mode:'all'
  })
  const [isSubmit, setSubmit] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  
  //image related state
  const [previewSrc, setPreviewSrc] = useState<string>('');

  const handleSubmitForm = (value: z.infer<typeof formSchema>) =>{
    // temporary solution for unable to get usertype
    form.setValue('users_type',2);

    setSubmit(true);
    dispatch(CreateUsers(value));

    setSubmit(false);
    setPreviewSrc("");
    dispatch(getUser());
    form.reset();
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
                  src={previewSrc || userimg} alt="no img"/>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-4">
        
                  <FormField control={form.control} name="avatar" render={({ field }) => (
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
                              <FaUser
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.name?'text-red-500':''}`}/>
                              <Input 
                              placeholder="Username" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.name?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>


                      <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <MdEmail 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.email?'text-red-500':''}`}/>
                              <Input type="email" 
                              placeholder="Email address" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.email?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>

                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <FaPhone 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.phone?'text-red-500':''}`}/>
                              <Input type="text" 
                              placeholder="Phone number" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.phone?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>


                    <FormField control={form.control} name="password" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <MdOutlinePassword 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.password?'text-red-500':''}`}/>
                              <Input type="password" 
                              placeholder="Password" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.password?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>


                    <FormField control={form.control} name="password_confirmation" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <MdOutlinePassword 
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.password_confirmation?'text-red-500':''}`}/>
                              <Input type="password" 
                              placeholder="Confirm password" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.password_confirmation?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs"/>
                      </FormItem>)}/>


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

export default CreateUser;