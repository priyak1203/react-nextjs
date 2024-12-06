import { Prisma } from '@prisma/client';

export type ActionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;
