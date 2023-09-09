import { Button, FileTrigger } from 'react-aria-components' // defaultCamera = "environment"
import styles from './ui.module.scss'

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <FileTrigger acceptedFileTypes={['image/png']}>
        <Button>Select files</Button>
      </FileTrigger>
    </div>
  )
}

export default Ui
