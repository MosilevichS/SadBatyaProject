import { z } from 'zod'

export const validateForm = z.object({
  name: z
    .string()
    .min(3, 'Name must be more than 3 characters')
    .max(255, 'Name must be less than 255 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9+]{10,15}$/, 'Phone must be 10-15 digits'),
})
