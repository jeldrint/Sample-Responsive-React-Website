import bg2 from '../img/nat-4.jpg'
import bg3 from '../img/nat-5.jpg'

import FeaturesCard from './31_FeaturesCard';

const Features = () => {
    return(
        <div className='relative min-h-[140vh] md:min-h-[115vh] clip-path-3 md:clip-path-4 w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bg2})`}}>
            <div className='absolute py-[50px] h-full w-full bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
                <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-y-3 sm:gap-y-5 md:gap-x-4 lg:gap-x-8'>
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