import styles from "./AppNav.module.css";
import Logo from "./Logo";
import MainContent from "./MainContent";

function AppNav() {
  return (
    <div className={`${styles.nav}  `}>
      <div className="flex justify-between items-center  w-full mx-4">
        <Logo />
        <MainContent />
      </div>
    </div>
  );
}

export default AppNav;
