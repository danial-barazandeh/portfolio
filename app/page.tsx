import Image from 'next/image'
import styles from './page.module.css'
import Lottie from './lottie'

export default function Home() {



  return (
    <main>
      <div className={styles.header}>

        <div className={styles.leftSide}>
          <div className={styles.title}>
            Portfolio
          </div>
        </div>
        <div className={styles.rightSide}>
          <Lottie/>
        </div>

        <div className={styles.introduction}>
          <div className={styles.child}>My name is danial </div>
          <div className={styles.child}>and im a full-stack developer</div>
          <div className={styles.childWithAccent}>Mobile & Web</div>
        </div>

      </div>

    </main>
  )
}
