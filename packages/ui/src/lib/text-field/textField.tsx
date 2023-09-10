import { useRef } from 'react'
import { useTextField, type AriaTextFieldProps } from 'react-aria'

export function TextField(props: AriaTextFieldProps) {
  const { label } = props
  const ref = useRef(null)
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {props.description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {props.errorMessage}
        </div>
      )}
    </div>
  )
}
