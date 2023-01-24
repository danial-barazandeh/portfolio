"use client"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaGithub, FaDownload } from "react-icons/fa";

export default function Swiperr() {
    return (<Swiper
        modules={[Navigation, Scrollbar, A11y]}
        className='w-[100%] h-[100%]m-0'
        spaceBetween={50}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className='flex gap-8' key="key">

            <div className='w-[100%] h-[50vh] overflow-hidden rounded-3xl backgr bg-[url("http://192.168.1.236:3000/images/mobileWorldSlider.jpg")] bg-cover bg-no-repeat bg-center'>
            </div>

            <div className='flex flex-col justify-between h-[50vh]'>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem]'>Framework: Flutter</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem] sm:text-[0.7rem]'>Platform: Android & IOS</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem]'>Backend: Laravel</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem]'>Admin Panel: Laravel</span>
                </div>
                <div className='text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem] rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12 flex items-center justify-center text-3xl'>
                    <FaGithub></FaGithub>
                </div>
                <div className='text-[0.7rem] 2xl:text-[1rem] xl:text-text-[1rem] lg:text-text-[1rem] md:text-[0.8rem] rounded-3xl bg-accentColor text-backgroundColor w-40 xl:w-48 2xl:w-56 h-12  flex items-center justify-center text-3xl'>
                    <FaDownload></FaDownload>
                </div>
            </div>

        </SwiperSlide>
    </Swiper>);
}