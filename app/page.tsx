/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import Lottie from './lottie'
import Swiperr from './swiperr'

export default function Home() {



  return (
    <main className="bg-backgroundColor">
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

      <div className="flex flex-col">

        <div className={styles.body}>

          <div className={styles.leftSide}>

            <div className="relative mt-[20vh] xs:mt-[0px] md:[0px] lg:[0px] w-[100%] ml-[2vh]">
              <div className="bg-me bg-contain bg-center absolute z-10 top-[-2.5vh] left-[2.5vh] sizing">

              </div>
              <div className="border-accentColor border-8 absolute sizing">
              </div>
            </div>

          </div>

          <div className={styles.rightSide}>

            <div className="font-bold text-3xl">
              About me
            </div>

            <div className="border-b-4 border-accentColor w-[30%] my-2">
            </div>

            <div className="text-md text-justify w-[80%] xl:w-[70%] 2xl:w-[60%]">
              <p className=" text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                I'm Danial Barazandeh. I'm a Ph.D. student in artificial intelligence. I have been a full-stack developer for more than five years. I work with various stacks and develop mobile and web applications. You can see some of my projects on this website. I'm always actively looking for freelancing projects. But I'm recently I'm looking for a full-time job as well.
                If you have any questions, you can contact me via my email.
              </p>
            </div>

          </div>

        </div>


        <div className="mt-16 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">

          <div className="w-[100%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mb-16">
            <div className="flex flex-col ml-[10vh]">
              <span className="text-white text-2xl"> Some of my projects</span>
              <div className="border-b-4 border-accentColor w-[90%] my-2"></div>
            </div>
          </div>

          <div className="flex justify-center items-center mx-[5%] w-[90%] lg:w-[60%] xl:w-[60%] 2xl:w-[50%]">
            <Swiperr />
          </div>

        </div>

      </div>

    </main>
  )
}
