import bg2 from '../img/nat-4.jpg'
import bg3 from '../img/nat-5.jpg'

import FeaturesCard from './31_FeaturesCard';

const Features = () => {
    return(
        <div className='relative -top-[150px] md:-top-[250px] min-h-[140vh] w-full bg-auto bg-center bg-no-repeat clip-path-3' style={{backgroundImage: `url(${bg2})`}}>
            <div className='absolute py-[50px] h-full w-full bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
                <div className='flex flex-col w-full h-full items-center justify-center gap-y-10'>
                    <FeaturesCard logoCode='S' />
                    <FeaturesCard logoCode='B' />
                    <FeaturesCard logoCode='+' />
                    <FeaturesCard logoCode='W' />
                </div>
            </div>
        </div>
    )
}

export default Features;