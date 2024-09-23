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
        <div className="flex flex-col items-center max-w-[350px] bg-[#FFFFFFCC] text-[#777777] gap-y-1 p-3 rounded-sm shadow-lg duration-300 hover:-translate-y-3">
            <div className="text-[48px] text-center">
                <span className="font-lineaBasic bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">{logoCode}</span>
            </div>
            <span className="text-[12.8px] font-bold">{str}</span>
            <span className="text-[12px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</span>
        </div>
    )

}

export default FeaturesCard;