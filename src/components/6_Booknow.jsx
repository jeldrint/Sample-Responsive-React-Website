import bg1 from '../img/nat-10.jpg'

const BookNow = () => {

    return(
        <div id='booknow' className='py-20 w-full text-[12px] md:text-[13.6px] flex flex-col items-center bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
            <div className='relative min-w-[352px] md:w-[800px] lg:w-[950px] xl:w-[1100px] min-h-[500px] bg-cover bg-center rounded-sm shadow-xl' style={{backgroundImage: `url(${bg1})`}}>
                <form action="" method="" className="absolute w-full h-full md:w-[75%] px-12 py-[60px] flex flex-col items-center md:items-start justify-center gap-y-10 bg-gray-100 opacity-90 md:clip-path-form rounded-sm">
                    <legend className="text-lg md:text-3xl lg:text-4xl font-bold text-center tracking-wide transition-transform hover:skew-x-[12deg] hover:skew-y-[4deg] hover:scale-110">
                        <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                            START BOOKING NOW
                        </span>
                    </legend>
                    <input className='min-w-[256px] md:min-w-[350px] p-3' name='full-name' id='full-name' placeholder='Full name' type='text' required />
                    <input className='min-w-[256px] md:min-w-[350px] p-3' name='email' id='email' placeholder='Email Address' type='email' required />
                    <div className='self-start flex flex-col md:flex-row gap-y-4 md:gap-x-4'>
                        <div className='flex text-[12.8px] md:text-[14.4px] gap-x-2'>
                            <input className='w-6 h-6 cursor-pointer' name='select-group' id='small-group' type='radio' required />
                            <label htmlFor='small-group'>Small Tour Group</label>                    
                        </div>
                        <div className='flex text-[12.8px] md:text-[14.4px] gap-x-2'>
                            <input className='w-6 h-6 cursor-pointer' name='select-group' id='large-group' type='radio' required />
                            <label htmlFor='large-group'>Large Tour Group</label>                    
                        </div>
                    </div>
                    <button type='submit' className='self-start bg-[#55C57A] text-[#F7F7F7] px-7 py-3 rounded-full text-xs md:text-sm lg:text-base cursor-pointer transition-transform hover:scale-105'>
                        NEXT STEP {String.fromCharCode(8594)}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BookNow;