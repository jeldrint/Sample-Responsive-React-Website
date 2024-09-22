import logo1 from '../img/logo-white.png'


const IntroHeader = () => {
    return (
        <div className='flex flex-col items-center'>
            <img alt='white logo' src={logo1} className='h-7 self-start'/>
            <br /><br /><br /><br /><br /><br />
            <div className='flex flex-col items-center gap-y-3'>
                <span className='text-3xl sm:text-5xl tracking-[0.5em] font-lato text-white'>OUTDOORS</span>
                <span className='text-xs sm:text-sm md:text-base tracking-[0.5em] md:tracking-[0.65em] font-lato font-bold text-white'>IS&ensp;WHERE&ensp;LIFE&ensp;HAPPENS</span>
            </div>
            <br /><br />
            <button type='button' className='bg-white font-lato transition-all hover:scale-110 px-7 py-4 rounded-full text-xs'>
                DISCOVER OUR TOURS
            </button>
        </div>
    )
}

export default IntroHeader;