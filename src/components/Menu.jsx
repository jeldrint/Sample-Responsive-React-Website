import { useState } from "react";

const Menu = ({displayToursCard}) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const barStyle = 'w-5 h-[2px] bg-black mt-1 transition-transform';
    const barStyle1 = 'w-5 h-[2px] bg-black mt-[6px] transition-transform rotate-[135deg] translate-y-[3px]';
    const barStyle2 = 'transition-opacity opacity-0';
    const barStyle3 = 'w-5 h-[2px] bg-black mt-[6px] transition-transform -rotate-[135deg] -translate-y-[5px]';

    return(
        <div>
            <div className={`${!toggleMenu && 'opacity-0 -z-20'} ${toggleMenu && 'z-20'} duration-300 fixed min-h-screen w-screen flex flex-col items-center justify-center bg-[white] bg-gradient-to-br from-[#28b485cc] to-[#7ed56fcc]`}>
                <ul className="text-center text-3xl text-[#F7F7F7] font-light flex flex-col gap-y-10 cursor-pointer">
                    <li className="p-3 transition-colors hover:text-[#28b485cc] hover:bg-[#F7F7F7]">01 ABOUT NATOURS</li>
                    <li className="p-3 transition-colors hover:text-[#28b485cc] hover:bg-[#F7F7F7]">02 YOUR BENEFITS</li>
                    <li className="p-3 transition-colors hover:text-[#28b485cc] hover:bg-[#F7F7F7]">03 POPULAR TOURS</li>
                    <li className="p-3 transition-colors hover:text-[#28b485cc] hover:bg-[#F7F7F7]">04 STORIES</li>
                    <li className="p-3 transition-colors hover:text-[#28b485cc] hover:bg-[#F7F7F7]">05 BOOK NOW</li>
                </ul>

            </div>
            <div className="z-20 transition-transform fixed right-12 top-12 inline-block cursor-pointer bg-[white] p-6 rounded-[50%]" onClick={()=>setToggleMenu(!toggleMenu)}>
                <div className={toggleMenu ? barStyle1: barStyle}></div>
                <div className={toggleMenu ? barStyle2: barStyle}></div>
                <div className={toggleMenu ? barStyle3: barStyle}></div>
            </div>
        </div>
    )
}

export default Menu;