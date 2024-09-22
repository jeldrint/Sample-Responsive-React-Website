import { useState } from "react";

const MenuIcon = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const barStyle = 'w-5 h-[2px] bg-black mt-1';
    const barStyle1 = 'w-5 h-[2px] bg-black mt-1 rotate-[135deg] translate-y-[5px]';
    const barStyle2 = 'opacity-0';
    const barStyle3 = 'w-5 h-[2px] bg-black mt-1 -rotate-[135deg] -translate-y-[1px]';

    return(
        <div className="z-10 fixed right-12 top-12 inline-block cursor-pointer bg-white p-5 rounded-full transition-all" onClick={()=>setToggleMenu(!toggleMenu)}>
            <div className={toggleMenu ? barStyle1: barStyle}></div>
            <div className={toggleMenu ? barStyle2: barStyle}></div>
            <div className={toggleMenu ? barStyle3: barStyle}></div>
        </div>
    )
}

export default MenuIcon;