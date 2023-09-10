// import React from 'react'
import styles from './fileUploadInput.module.css'
//import { FileTrigger, Button } from 'react-aria-components'
/* eslint-disable-next-line */
export interface FileUploadInputProps {}

export function FileUploadInput(props: FileUploadInputProps) {
  //const [file, setFile] = React.useState(null)

  return (
    <div className={styles['container']}>
      {/* <FileTrigger
        name='imageFile'
        acceptedFileTypes={['image/png']}
        defaultCamera="environment"
        onChange={(e) => {
          const files = Array.from(e)
          const urls = files.map((file) => file.name)
          setFile((prev) => [...prev, ...urls])
        }}>
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file} */}
    </div>
  )
}

export default FileUploadInput
