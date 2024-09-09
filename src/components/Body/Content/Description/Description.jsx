import styles from "./Description.module.css";
function Description() {
  return (
    <section className={`${styles.section} flex  `}>
      <div
        className={`${styles.innerSection} items-center  m-auto w-[1300px]  `}
      >
        <div className="items-center ">
          <h2
            className={`${styles.title} flex items-center justify-center mb-2`}
          >
            Smart matches. Smoother hauls.
          </h2>
          <div className={`${styles.paragraph} flex justify-center`}>
            <p className={`${styles.paragraph} " "`}>
              Built to unlock efficiency with every shipment, the Convoy
              Platform connects carriers to high-quality freight, increasing
              drivers’ earnings, as brokers streamline operations and reduce
              costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Description;
