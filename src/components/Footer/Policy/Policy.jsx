import styles from "./Policy.module.css";

function Policy() {
  return (
    <div
      className={`${styles.container} justify-center items-center gap-6 mt-9`}
    >
      <div className="grow border-b border-[#304850]"></div>

      <div className={`${styles.policy} my-[24px]`}>
        <div className="flex flex-row">
          <span>©2024 Flexport Freight Tech LLC</span>
          <span className={styles.dot}></span>

          <a href="https://api.convoy.com/v0/privacy-policy">
            <li className={styles.list}>Privacy Policy</li>
          </a>
        </div>
        <div className="flex flex-row">
          <span>
            The Convoy Platform is owned and operated by Flexport Freight Tech
            LLC.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Policy;
