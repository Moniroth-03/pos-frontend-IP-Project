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
import { MdEmail } from "react-icons/md";
import { FaPhone, FaTag, FaUser } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { MdGroups } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"
import {z} from 'zod';
import formSchema from "./formschema";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/layout/loading/loading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { UpdateUser as UpdateUsers, getUser } from "../user.service";
import userimg from '@/assets/user.svg';
import { user } from "../user.type";
import { toast } from "sonner";
import env from "@/environments/environment";

type props = {
  data: user | null;
  open: any;
  setOpen: any;
}

const UpdateUser = ({open,setOpen,data}: props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      users_type: data?.role.id,
      avatar: data?.avatar,
    },
    mode:'all'
  })
  const [isSubmit, setSubmit] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  //image related state
  const [previewSrc, setPreviewSrc] = useState<string>(env.img_url + data?.avatar);

  const handleSubmitForm = (value: z.infer<typeof formSchema>) =>{
    setSubmit(true);
    dispatch(UpdateUsers({id: data?.id, body: value}));

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

  useEffect(() => {
    if (data) {
      form.reset({
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        users_type: data?.role.id,
        is_active: 0,
      });
      setPreviewSrc(env.img_url + data?.avatar)
    }
  }, [data, form]);

  useEffect(()=>{
    const fetchImage = async () => {
      try {
        const response = await fetch(env.img_url + data?.avatar);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result as string;
          form.setValue('avatar',base64);
        };

        reader.onerror = () => {
          console.error('Error converting image to base64');
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    if (previewSrc) {
      fetchImage();
    }
  }, [previewSrc]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

        <SheetContent className="h-full sm:max-w-[600px] py-4 px-4 overflow-auto pb-4">
            <SheetHeader className="w-full">
                <SheetTitle className="w-4/5 truncate mb-6">Update <span className="font-medium ml-2">{ data?.name }</span></SheetTitle>


                {/* Sheet content */}
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex grow flex-col gap-3 text-slate-900">

              {/* this is the image upload preview and the upload buttom is inside the form  */}
              <img className="flex object-contain max-h-36 mb-4 aspect-square brightness-105" 
                  src={previewSrc || userimg}/>

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

                      <FormField control={form.control} name="users_type" render={({ field }) => (
                      <FormItem className="flex flex-col">
                          <FormControl>
                            <div className="relative">
                              <MdGroups
                              className={`absolute bottom-1/2 left-4 scale-90 translate-y-1/2 ${form.formState.errors.phone?'text-red-500':''}`}/>
                              <Input type="text" 
                              placeholder="User type" 
                              {...field} 
                              className={`pl-12 py-5 outline-none ring-gray-200 transition-all ${form.formState.errors.phone?'ring-1 ring-red-500 text-red-500 focus-visible:ring-red-500 placeholder:text-red-400':''}` }/>
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

export default UpdateUser;