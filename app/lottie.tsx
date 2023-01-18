"use client"

import { useLottie } from "lottie-react";
import lottieBaner from "../public/lottie/lottieYellow.json";


export default function Lottie() {

    const options = {
        animationData: lottieBaner,
        loop: true,
    };

    const { View } = useLottie(options);


    return (
        <div className="w-[500px] h-[500px]">
            {View}
        </div>);
}