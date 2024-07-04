import {z} from 'zod';

const formSchema = z.object({
  name: z.string().max(100, { message: "Name cannot exceed 100 characters" })
                  .refine(val => val.trim() !== '', { message: 'Name cannot be empty' }),
  code: z.string().max(10, { message: "Code cannot exceed 10 characters" })
                  .refine(val => val.trim() !== '', { message: 'Code cannot be empty' }),
  type_id: z.string({ required_error: "Please select a category.",})
            .refine(val => val.trim() !== '', { message: 'Please select a category' }),
  in_stock: z.preprocess(val => Number(val), z.number()
            .nonnegative({ message: 'In Stock must be a non-negative number' })),
  unit_price: z.preprocess(val => Number(val), z.number()
            .nonnegative({ message: 'Price must be a non-negative number' }))
            .refine(val => val !== 0, { message: 'Price cannot be 0' }),
  image: z.string({ required_error: "Please select an image.",})
          .refine(val => val.trim() !== '', { message: 'Please select an image' }),
  // supplier: z.string().max(100, { message: "name cannot exceed 100 characters" }),
});
export default formSchema;