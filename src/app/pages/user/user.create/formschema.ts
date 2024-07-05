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
  
  password: z.string()
    .min(6, { message: "password must be at least 6 characters long" }),
  
  password_confirmation: z.string(),

  users_type: z.preprocess(val => Number(val), z.number().nonnegative({ message: 'users_type must be a non-negative number' })),
  
  avatar: z.string(),
  
  
})
.superRefine((data, ctx) => {
  if (data.password !== data.password_confirmation) {
    ctx.addIssue({
      code: 'custom',
      path: ['password_confirmation'],
      message: 'passwords must match',
    });
  }
});

export default formSchema;
