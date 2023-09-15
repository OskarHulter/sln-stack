import { TypeOf } from 'zod'
import { SupportQuestionSchema } from './schemas'

export type SupportQuestion = TypeOf<typeof SupportQuestionSchema>
