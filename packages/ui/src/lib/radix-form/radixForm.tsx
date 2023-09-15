"use client"
import * as Form from '@radix-ui/react-form'
import { useForm } from 'react-hook-form'
import { type SupportQuestion } from '@sln/validation'
export function RadixForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SupportQuestion>()
  //handleSubmit(() => getValues())

  return (
    <Form.Root className="FormRoot" onSubmit={(values) => handleSubmit(() => getValues())}>
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
