import CompanyIcon from "./CompanyIcon/CompanyIcon";
import styles from "./Footer.module.css";
import HelpCenter from "./HelpCenter/HelpCenter";
import Policy from "./Policy/Policy";

function Footer() {
  return (
    <div className={`${styles.footer} `}>
      <div className="my-[40px] mx-[60px] justify-center items-center gap-6">
        <CompanyIcon />
        <HelpCenter />
        <Policy />
      </div>
    </div>
  );
}
export default Footer;
