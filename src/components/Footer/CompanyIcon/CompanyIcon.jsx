import styles from "./CompanyIcon.module.css";

function CompanyIcon() {
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <div className="my-[24px]">
        <a href="https://convoy.com/" title="Convoy">
          <img
            src="https://mms.businesswire.com/media/20220919005244/en/1575151/4/Convoy_block_roarange_2.jpg"
            className={styles.logoHolder}
            alt="Convoy"
          />
        </a>
      </div>
      <div className="grow border-b border-[#304850]"></div>{" "}
    </div>
  );
}
export default CompanyIcon;
