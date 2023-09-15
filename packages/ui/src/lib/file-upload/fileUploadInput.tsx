"use client"
import { Button, FileTrigger } from 'react-aria-components' // defaultCamera = "environment"

/* eslint-disable-next-line */
export interface FileUploadInputProps { }

export function FileUploadInput(props: FileUploadInputProps) {
  return (
    <div>
      <h1>Welcome to FileUploadInput!</h1>
      <FileTrigger acceptedFileTypes={['image/png']}>
        <Button>Select files</Button>
      </FileTrigger>
    </div>
  )
}
