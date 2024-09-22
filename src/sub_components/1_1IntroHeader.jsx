import logo1 from '../img/logo-white.png'


const IntroHeader = () => {
    return (
        <div className='flex flex-col w-full h-full items-center relative'>
            <img alt='white logo' src={logo1} className='h-7 self-start cursor-pointer'/>
            <div className='flex flex-col items-center gap-y-3 absolute top-1/4'>
                <span className='text-4xl sm:text-5xl tracking-[0.4em] md:tracking-[0.6em] font-lato text-white'>OUTDOORS</span>
                <span className='text-xs sm:text-sm md:text-base tracking-[0.5em] md:tracking-[0.75em] font-lato font-bold text-white'>IS&ensp;WHERE&ensp;LIFE&ensp;HAPPENS</span>
                <br />
                <div className='bg-white font-lato transition-all px-7 py-3 rounded-full text-xs cursor-pointer'>
                    DISCOVER OUR TOURS
                </div>
                <div className='relative -top-[52px] bg-white text-white font-lato transition-all hover:animate-[ping_0.75s_ease-out_1_0s] px-7 py-3 opacity-20 rounded-full text-xs cursor-pointer'>
                    DISCOVER OUR TOURS
                </div>
            </div>
        </div>
    )
}

export default IntroHeader;