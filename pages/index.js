import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stats preview</title>
        <link rel="shortcut icon" href="/favicon-32x32.png"/>
      </Head>
      <div className={styles.statscontainer}>
        <div className={styles.textarea}>
          <div className={styles.heading}>
            <h2>
              Get <span className={styles.insight}>insights</span> that help your business grow.
            </h2>
          </div>
          <div className={styles.description}>
            <p>
              Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className={styles.stats}>
            <div className={styles.companies}>
              <p className={styles.number}>
                10k+
              </p>
              <p className={styles.category}>
                companies
              </p>
            </div>
            <div className={styles.templates}>
              <p className={styles.number}>
                314
              </p>
              <p className={styles.category}>
                templates
              </p>
            </div>
            <div className={styles.queries}>
              <p className={styles.number}z>
                12M+
              </p>
              <p className={styles.category}>
                queries
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imagearea}>
          <img
            src="/image-header-desktop.jpg"
            alt="hero"
            className={styles.sideimage}
          />
        </div>
      </div>
    </div>
  )
}
