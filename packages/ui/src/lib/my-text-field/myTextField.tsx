import type { TextFieldProps } from 'react-aria-components'
import { Input, Label, Text, TextField } from 'react-aria-components'


// label is used as heading
interface MyTextFieldProps extends TextFieldProps {
  label?: string
  description?: string
  errorMessage?: string
}

export function MyTextField(
  { label, description, errorMessage, ...props }: MyTextFieldProps
) {
  return (

    <TextField {...props}>
      <Label>{label}</Label>
      <Input />
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </TextField>
  )
}

export default MyTextField
