import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

export function FormExample() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register('example')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('exampleRequired', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}
export default FormExample
// import * as React from "react"
// import { useForm } from "react-hook-form"

// type FormData = {
//   firstName: string
//   lastName: string
// }

// export default function App() {
//   const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>()
//   const onSubmit = handleSubmit(data => console.log(data))
//   // firstName and lastName will have correct type

//   return (
//     <form onSubmit={onSubmit}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Last Name</label>
//       <input {...register("lastName")} />
//       <button
//         type="button"
//         onClick={() => {
//           setValue("lastName", "luo") // ✅
//           setValue("firstName", true) // ❌: true is not string
//           errors.bill // ❌: property bill does not exist
//         }}
//       >
//         SetValue
//       </button>
//     </form>
//   )
// }
