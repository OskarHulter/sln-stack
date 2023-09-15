import { z } from 'zod'

export const SupportQuestionSchema = z.object({
  email: z
    .string()
    .min(4, { message: 'Must be 5 or more characters long' })
    .optional(),
  question: z
    .string()
    .min(4, { message: 'Must be 5 or more characters long' })
    .optional(),
})
