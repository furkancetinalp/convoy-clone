import styles from "./AppNav.module.css";

function MainContent() {
  return (
    <ul
      className={`${styles.mainMenu} flex flex-row items-center  justify-between  align-middle w-[365.75px]  max-w-[365.75px]  text-[17px]`}
    >
      <li className={`${styles.brokersAndCarriers}`}>
        <a href="https://convoy.com/">Carriers</a>
      </li>
      <li className={`${styles.brokersAndCarriers}`}>
        <a href="https://convoy.com/">Brokers</a>
      </li>
      <ul className="flex flex-row justify-between gap-3">
        <li className={`${styles.btnLogin}`}>
          <a href="https://convoy.com/">Log in</a>
        </li>
        <li className={`${styles.btnSignup}`}>
          <a href="https://convoy.com/">Sign up</a>
        </li>
      </ul>
    </ul>
  );
}
export default MainContent;
