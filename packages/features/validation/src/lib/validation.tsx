import styles from './validation.module.scss';

/* eslint-disable-next-line */
export interface ValidationProps {}

export function Validation(props: ValidationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Validation!</h1>
    </div>
  );
}

export default Validation;
