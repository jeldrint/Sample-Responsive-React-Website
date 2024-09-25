import { useEffect, useState } from "react";

const FeaturesCard = ({logoCode}) => {
    const [str, setStr] = useState('');

    useEffect(()=> {
        switch(logoCode){
            case 'S':
                setStr('EXPLORE THE WORLD');
                break;
            case 'B':
                setStr('MEET NATURE');
                break;
            case 'W':
                setStr('FIND YOUR WAY');
                break;
            case '+':
                setStr('LIVE A HEALTHIER LIFE');
                break;                
        }    
    },[logoCode])


    return (
        <div className="flex flex-col items-center justify-center max-w-[300px] sm:max-w-[350px] md:max-w-[200px] md:h-[300px] lg:max-w-[260px] gap-y-1 p-3 bg-[#FFFFFFCC] rounded-sm shadow-xl duration-300 hover:-translate-y-2 md:hover:-translate-y-6">
            <div className="text-[48px] lg:text-[60px] text-center">
                <span className="font-lineaBasic bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">{logoCode}</span>
            </div>
            <span className="text-[12.8px] lg:text-[16px] font-bold">{str}</span>
            <span className="text-[12px] lg:text-[15px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</span>
        </div>
    )

}

export default FeaturesCard;