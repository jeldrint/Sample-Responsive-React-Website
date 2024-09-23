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
        <div className="flex flex-col items-center w-[350px] h-[188px] bg-[#FFFFFFCC] text-[#777777] gap-y-2">
            <span className="font-lineaBasic">{logoCode}</span>
            <span>{str}</span>
            <span className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.</span>
        </div>
    )

}

export default FeaturesCard;