import { z } from 'zod';

const formSchema = z.object({
  name: z.string()
    .max(100, { message: "name cannot exceed 100 characters" })
    .transform(val => val.trim())
    .refine(val => val !== '', { message: 'name cannot be empty' }),
  
  email: z.string()
    .email({ message: "Invalid email address" }),
  
  phone: z.string()
    .max(15, { message: "phone cannot exceed 15 characters" })
    .refine(val => /^[0-9]+$/.test(val), { message: 'phone must contain only numbers' }),
  
  is_active: z.number(),
  
  users_type: z.preprocess(val => Number(val), z.number().nonnegative({ message: 'users_type must be a non-negative number' })),
});

export default formSchema;
