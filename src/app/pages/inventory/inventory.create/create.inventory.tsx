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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form"
import {z} from 'zod';


const formSchema = z.object({
  name: z.string().max(100, { message: "name cannot exceed 100 characters" })
                  .refine(val => val.trim() !== '', { message: 'name cannot be empty' }),
  code: z.string().max(10, { message: "code cannot exceed 10 characters" })
                  .refine(val => val.trim() !== '', { message: 'code cannot be empty' }),
  type_id: z.preprocess(val => Number(val), z.number()),
  in_stock: z.preprocess(val => Number(val), z.number()
            .nonnegative({ message: 'In Stock must be a non-negative number' }))
            .optional(),
  unit_price: z.preprocess(val => Number(val), z.number()
            .nonnegative({ message: 'price must be a non-negative number' }))
            .optional()
            .refine(val => val !== 0, { message: 'price cannot be 0' }),
  // supplier: z.string().max(100, { message: "name cannot exceed 100 characters" }),
})

const CreateInventory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      code:"",
      type_id: 0,
      in_stock: 0,
      unit_price: 0,
    },
    mode:'all'
  })

  const handleSubmitForm = (value: z.infer<typeof formSchema>) =>{
    console.log(value)
  }
  return (
    <Sheet>
        {/* click to open Sheet button that will display in component */}
        <SheetTrigger asChild>
            <Button variant="outline">
                <FaPlus className="text-emerald-500" size={'0.8rem'}/>
                <span className="font-medium pl-1 text-emerald-500 text-sm">New</span>
            </Button>
        </SheetTrigger>

        <SheetContent className="h-full sm:max-w-[600px] py-4 px-4 overflow-auto pb-4">
            <SheetHeader className="w-full">
                <SheetTitle className="w-4/5 truncate mb-6">Create new item</SheetTitle>


                {/* Sheet content */}
                <SheetDescription className="flex grow flex-col gap-3 text-slate-900">

                    <img className="flex object-contain max-h-36 mb-4 aspect-square brightness-105" src="https://m.media-amazon.com/images/I/51G22XSlZDL._AC_UF894,1000_QL80_.jpg" alt="no img"/>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 items-center">
                                <FormLabel>Name</FormLabel>
                                <div>
                                  <FormControl>
                                    <Input placeholder="item name" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                                </div>
                              </div>
                            </FormItem>)}/>

                        <FormField control={form.control} name="code" render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 items-center">
                                <FormLabel>Code</FormLabel>
                                <div>
                                  <FormControl>
                                    <Input placeholder="item Code" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                                </div>
                              </div>
                            </FormItem>)}/>

                        <FormField control={form.control} name="type_id" render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 items-center">
                                <FormLabel>Category</FormLabel>
                                <div>
                                  <FormControl>
                                    <Input placeholder="item cat" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                                </div>
                              </div>
                            </FormItem>)}/> 

                        <FormField control={form.control} name="in_stock" render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 items-center">
                                <FormLabel>In stock</FormLabel>
                                <div>
                                  <FormControl>
                                    <Input placeholder="item stock" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                                </div>
                              </div>
                            </FormItem>)}/>

                        <FormField control={form.control} name="unit_price" render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 items-center">
                                <FormLabel>Price</FormLabel>
                                <div>
                                  <FormControl>
                                    <Input placeholder="item price" {...field} />
                                  </FormControl>
                                  <FormMessage/>
                                </div>
                              </div>
                            </FormItem>)}/>
                        
                        {/* <FormField control={form.control} name="supplier" render={({ field }) => (
                            <FormItem>
                              <FormLabel>Supplier</FormLabel>
                              <FormControl>
                                <Input placeholder="item supplier" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>)}/> */}

                        <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 shadow-md">Submit</Button>
                      </form>
                    </Form>

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