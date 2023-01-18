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
          <Lottie />
        </div>

        <div className={styles.introduction}>
          <div className={styles.child}>My name is danial </div>
          <div className={styles.child}>and im a full-stack developer</div>
          <div className={styles.childWithAccent}>Mobile & Web</div>
        </div>

      </div>

      <div className={styles.body}>
        <div className={styles.leftSide}>
          
          <div className="text-3xl font-bold"> About me </div>

          <div className="relative mt-[12%] ml-[20%]">
            <div className="
                  bg-[url('http://localhost:3000/images/meTemplate.jpg')]
                  w-[20vh] h-[30vh] bg-cover absolute z-10 top-[-2.5vh] left-[2.5vh]">

            </div>
            <div className="w-[20vh] h-[30vh] border-accentColor border-8
                            absolute">
            </div>
          </div>

        </div>

        <div className={styles.rightSide}>
            nemidonam
          </div>
      </div>

    </main>
  )
}
