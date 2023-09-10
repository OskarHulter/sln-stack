import * as Form from '@radix-ui/react-form'
import { useForm } from 'react-hook-form'
import { TypeOf, z } from 'zod'

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
export type RegisterInput = TypeOf<typeof SupportQuestionSchema>

export function FormDemo() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<RegisterInput>()

  // const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
  //   handleSubmit(values)
  // }
  return (
    <Form.Root className="FormRoot" onSubmit={handleSubmit(getValues)}>
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <Form.Field className="FormField" {...register('email')}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label className="FormLabel">Email</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="Input" type="email" required />
        </Form.Control>
      </Form.Field>

      {errors.question?.message && <p>{errors.question?.message}</p>}
      <Form.Field className="FormField" {...register('question')}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label className="FormLabel">Question</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            Please enter a question
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea className="Textarea" required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="Button" style={{ marginTop: 10 }}>
          Post question
        </button>
      </Form.Submit>
    </Form.Root>
  )
}

export default FormDemo

// import { useForm, SubmitHandler } from "react-hook-form"
// import { z, object, TypeOf } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { ErrorMessage } from "@hookform/error-message"
// import { MyTextField } from '../my-text-field/myTextField'

// /* eslint-disable-next-line */
// export interface FormProps { }

// export default function ContactForm() {

//   return (
//     <form onSubmit={handleSubmit(onSubmitHandler)}>
//       <div className="flex flex-col">
//         <MyTextField
//           {...register("name")}
//           errorMessage={errors.name?.message ?? ""}
//         />
//         <div className="flex flex-col">
//           <label htmlFor="description">Description</label>
//           <br />
//           <textarea
//             rows={5}
//             aria-label="description"
//             {...register("description")}
//           />
//           <ErrorMessage errors={errors} name="description" />
//         </div>
//         <button type="submit">Create</button>
//       </div>
//     </form>
//   )
// }
