import { useState } from "react";
import ToursCard from "./4_ToursCard";

const Tours = () => {

    return (
        <div id='tours' className='min-h-[125vh] w-full gap-y-8 md:gap-y-12 flex flex-col items-center justify-center'>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                    MOST POPULAR TOURS
                </span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-x-5 lg:gap-x-10 w-full">
                <ToursCard tour={'the sea explorer'} d={3} people={30} guides={2} stay={'cozy hotels'} difficulty={'Easy'} price={297} />
                <ToursCard tour={'the forest hiker'} d={7} people={40} guides={6} stay={'provided tents'} difficulty={'Medium'} price={497} />
                <ToursCard tour={'the snow adventurer'} d={5} people={15} guides={3} stay={'provided tents'} difficulty={'Hard'} price={897} />
            </div>
            <a href='/' className='bg-[#55C57A] text-white px-7 py-3 rounded-full text-xs md:text-sm lg:text-base cursor-pointer transition-transform hover:scale-110'>
                DISCOVER ALL TOURS
            </a>
        </div>
    )

}

export default Tours;