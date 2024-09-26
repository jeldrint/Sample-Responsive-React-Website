import bg1 from '../img/hero.jpg'
import logo1 from '../img/logo-white.png'

const Intro = () => {
    return(
        <div name='natours' className='relative h-[95vh] w-full bg-cover bg-center bg-no-repeat clip-path-1' style={{backgroundImage: `url(${bg1})`}}>
            <div className='absolute p-9 h-full w-full bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
                <div className='flex flex-col w-full h-[80%] items-center relative'>
                    <img alt='white logo' src={logo1} className='m-5 md:m-0 h-7 md:h-10 self-start cursor-pointer'/>
                    <div className='flex flex-col items-center gap-y-3 absolute top-1/3'>
                        <span className='text-4xl sm:text-5xl lg:text-6xl tracking-[0.4em] md:tracking-[0.6em] text-[#F7F7F7]'>OUTDOORS</span>
                        <span className='text-xs sm:text-sm md:text-base lg:text-xl tracking-[0.5em] md:tracking-[0.75em] font-bold text-[#F7F7F7]'>IS&ensp;WHERE&ensp;LIFE&ensp;HAPPENS</span>
                        <br />
                        <div className='bg-[#F7F7F7] transition-all px-7 py-3 rounded-full text-xs md:text-sm lg:text-base cursor-pointer text-black'>
                            DISCOVER OUR TOURS
                        </div>
                        <a href='#tours' className='relative -top-[52px] md:-top-[56px] lg:-top-[60px] bg-[#F7F7F7] text-[#F7F7F7] hover:animate-[ping_0.75s_ease-out_1_0s] px-7 py-3 opacity-20 rounded-full text-xs md:text-sm lg:text-base cursor-pointer'>DISCOVER OUR TOURS</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;