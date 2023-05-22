import styles from "./Footer.module.sass";

const Footer = () => {
  const update = new Date().getFullYear();
  
  return (
    <div className={styles.container}>
      <p>
        <span>&copy;</span>
        {` Copyright ${update} | Developed by `}
        <a href="" target="_blank">santraez</a>
      </p>
    </div>
  );
};

export default Footer;