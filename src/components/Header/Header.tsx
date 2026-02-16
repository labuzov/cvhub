import styles from './Header.module.scss';


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          CVhub
        </div>
      </div>
    </header>
  );
}
