import styles from "./MainVideo.module.css";
function MainVideo() {
  return (
    <div className={`${styles.main}`}>
      <video autoPlay loop muted className={`${styles.bgVid}`}>
        <source
          src="https://convoy.com/wp-content/uploads/2021/12/Home-Page_1st-Cut-1.mp4"
          type="video/mp4"
        />
      </video>
      <div className={`${styles.title}`}>
        <h1 className="">The Convoy Platform</h1>
      </div>
    </div>
  );
}
export default MainVideo;
