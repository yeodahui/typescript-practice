import styles from './Input.module.css';

export default function Input({ className = '', ...rest }) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...rest} />;
}
