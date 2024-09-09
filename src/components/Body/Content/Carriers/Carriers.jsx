import styles from "./Carriers.module.css";

function Carriers() {
  return (
    <div className={`${styles.container}  flex flex-row w-full `}>
      <div className={`${styles.content}  flex w-full items-center `}>
        <div className={`${styles.items} ml-[10%] `}>
          <div className="flex flex-col gap-y-5">
            <p className={`${styles.title}`}>For carriers</p>
            <h2 className={`${styles.sub}`}>Earn more with less hassle</h2>
            <div className={`${styles.description}`}>
              <p>
                The free Convoy app drives your business forward by keeping your
                trucks full on the lanes you like to run.
              </p>
            </div>
            <div className={`${styles.learnMore}`}>
              <a
                className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-round vc_btn3-style-custom"
                href="/carriers/"
                title=""
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.imageContainer}  w-full`}>
        <img
          src="https://convoy.com/wp-content/uploads/2022/01/For-Carriers@2x-1.jpg"
          alt="car"
        />
      </div>
    </div>
  );
}
export default Carriers;
