import styles from "./HelpCenter.module.css";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
function HelpCenter() {
  return (
    <div className="flex flex-col mb-8">
      <div className={`${styles.support} flex flex-row items-center `}>
        <h2>CARRIER SUPPORT</h2>
        <div className="flex flex-row gap-4">
          <div>
            <AppStoreButton
              theme="dark"
              className={`${styles.AppGalleryButton}`}
              url="https://www.apple.com/app-store/"
            />
          </div>
          <div>
            <GooglePlayButton
              theme="dark"
              className={`${styles.AppGalleryButton}`}
              url="https://play.google.com/store/apps/details?id=com.convoy.driver"
            />
          </div>
        </div>
      </div>
      <ul className={`${styles.helpCenter}`}>
        <li>
          <a href="https://convoy.com/">Help Center</a>
        </li>
      </ul>
    </div>
  );
}
export default HelpCenter;
