import { z, ZodSchema } from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'name must me atleast 4 characters' })
    .max(100, { message: 'name must be less than 100 characters' }),
  company: z
    .string()
    .min(4, { message: 'company must be atleast 4 characters' })
    .max(50, { message: 'company must be less than 50 characters' }),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number',
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    { message: 'description must be between 10 and 1000 words' }
  ),
  featured: z.coerce.boolean(),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
}
