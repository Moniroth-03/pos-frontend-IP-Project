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
});
export default formSchema;