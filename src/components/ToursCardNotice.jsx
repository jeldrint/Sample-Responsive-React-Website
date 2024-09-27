import pic1 from '../img/nat-8.jpg'
import pic2 from '../img/nat-9.jpg'

const ToursCardNotice = ({displayToursCard, setDisplayToursCard}) => {
    const msg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi porta.'

    return(
            <div className={`${!displayToursCard && 'opacity-0 -z-20'} ${displayToursCard && 'z-20 backdrop-blur delay-100 transition-all'} fixed min-h-screen w-screen flex flex-col items-center justify-center shadow-lg`}>
                <div className="max-w-[550px] min-h-[315px] md:max-w-[685px] md:min-h-[500px] lg:max-w-[1000px] flex items-start bg-white">
                    <div className='pl-5 lg:pl-0 self-center min-w-[180px] sm:min-w-[200px] md:min-w-[300px] lg:min-w-[400px]'>
                        <img src={pic1} alt='notice picture 1' />
                        <img src={pic2} alt='notice picture 2' />
                    </div>
                    <div className="relative p-10 md:tracking-wide flex flex-col items-start gap-y-3 text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
                        <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide transition-transform hover:skew-x-[12deg] hover:skew-y-[4deg] hover:scale-110">
                            <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                                START BOOKING NOW!
                            </span>
                        </div>
                        <span className="uppercase">Important – Please read these terms before booking</span>
                        <span className="font-light text-justify break-words sm:columns-2 column-rule gap-x-5 md:gap-x-7 lg:gap-x-10">{msg}</span>
                        <div className="absolute cursor-pointer right-6 top-6 group" onClick={()=>setDisplayToursCard(false)}>
                            <div className='w-5 h-[2px] transition-all bg-gray-400 group-hover:bg-[#28b485cc] rotate-[135deg] translate-y-[3px] mt-[6px]'></div>
                            <div className='w-5 h-[2px] transition-all bg-gray-400 group-hover:bg-[#28b485cc] -rotate-[135deg] -translate-y-[5px] mt-[6px]'></div>
                        </div>
                        <a href='/' className='self-center bg-[#55C57A] text-[#F7F7F7] px-5 py-2 md:px-7 md:py-3 rounded-full text-xs md:text-sm lg:text-base cursor-pointer transition-transform hover:scale-110'>
                            BOOK NOW!
                        </a>

                    </div>
                </div>
            </div>
    )
}

export default ToursCardNotice;