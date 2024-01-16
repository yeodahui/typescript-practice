import styles from './Button.module.css';

export default function Button({ className = '', ...rest }) {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} {...rest} />;
}
