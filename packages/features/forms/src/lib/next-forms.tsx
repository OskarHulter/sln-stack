import styles from './next-forms.module.scss';

/* eslint-disable-next-line */
export interface NextFormsProps {}

export function NextForms(props: NextFormsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextForms!</h1>
    </div>
  );
}

export default NextForms;
