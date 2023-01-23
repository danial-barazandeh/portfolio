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

            <div className='w-[100%] h-[50vh] overflow-hidden rounded-3xl backgr bg-[url("http://localhost:3000/images/mobileWorldSlider.jpg")] bg-cover bg-no-repeat bg-center'>
            </div>

            <div className='flex flex-col justify-between h-[50vh]'>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold'>Framework: Flutter</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold'>Platform: Android & IOS</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold'>Backend: Laravel</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center'>
                    <span className=' font-bold'>Admin Panel: Laravel</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center text-3xl'>
                    <FaGithub></FaGithub>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center text-3xl'>
                    <FaDownload></FaDownload>
                </div>
            </div>

        </SwiperSlide>
    </Swiper>);
}