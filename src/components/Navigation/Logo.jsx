import styles from "./AppNav.module.css";

function Logo() {
  return (
    <div>
      <a href="https://convoy.com/" className="" title="Convoy">
        <img
          src="https://mms.businesswire.com/media/20220919005244/en/1575151/4/Convoy_block_roarange_2.jpg"
          className={styles.logoHolder}
          alt="Convoy"
        />
      </a>
    </div>
  );
}

export default Logo;
