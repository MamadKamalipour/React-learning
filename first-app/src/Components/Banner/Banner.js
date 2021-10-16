import React from "react";
import styles from "./Banner.module.css";
export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerWrapper}>
          <h1 className={styles.title}>
            Hello Welcome To{" "}
            <span className={styles.secondeTitle}>My WebSite</span>{" "}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur necessitatibus porro architecto <br />
            id sapiente vel ab eligendi optio ad reprehenderit suscipit
            temporibus, aspernatur a fugiat ipsa autem sunt incidunt ex?
          </p>
        
      </div>
    </section>
  );
}
