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
        className='w-[70vw] h-[50vh] bg-backgroundColor flex items-center justify-center justify-items-center'
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
        <SwiperSlide className='flex items-center justify-center justify-items-center gap-8 px-[5vw]' key="key">

            <div className='w-[70vh] h-[40vh] overflow-hidden rounded-3xl backgr bg-[url("http://localhost:3000/images/mobileWorldSlider.jpg")] bg-cover bg-no-repeat bg-center'>
            </div>

            <div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center mb-2'>
                    <span className=' font-bold'>Framework: Flutter</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center mb-2'>
                    <span className=' font-bold'>Platform: Android & IOS</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center mb-2'>
                    <span className=' font-bold'>Backend: Laravel</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center mb-2'>
                    <span className=' font-bold'>Admin Panel: Laravel</span>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center text-3xl  mb-2'>
                    <FaGithub></FaGithub>
                </div>
                <div className='rounded-3xl bg-accentColor text-backgroundColor w-56 h-12 flex items-center justify-center text-3xl'>
                    <FaDownload></FaDownload>
                </div>
            </div>

        </SwiperSlide>
    </Swiper>);
}