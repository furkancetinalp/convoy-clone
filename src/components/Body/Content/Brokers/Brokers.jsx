import styles from "./Brokers.module.css";

function Brokers() {
  return (
    <div className={`${styles.container}  flex flex-row w-full `}>
      <div className={`${styles.imageContainer}  w-full`}>
        <img
          src="https://convoy.com/wp-content/uploads/2022/01/For-shippers@2x-1.jpg"
          alt="car"
        />
      </div>
      <div className={`${styles.content}  flex w-full items-center `}>
        <div className={`${styles.items} ml-[10%] `}>
          <div className="flex flex-col gap-y-5">
            <p className={`${styles.title}`}>For Brokers</p>
            <h2 className={`${styles.sub}`}>Scale your business</h2>
            <div className={`${styles.description}`}>
              <p>
                Expand your truckload capacity and save time and money, all
                while remaining the broker of record.
              </p>
            </div>
            <div className={`${styles.learnMore}`}>
              <a
                className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-round vc_btn3-style-custom"
                href="/Brokers/"
                title=""
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brokers;
