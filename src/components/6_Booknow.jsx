import bg1 from '../img/nat-10.jpg'

const BookNow = () => {

    return(
        <div id='booknow' className='py-20 w-full object-cover text-[12px] flex flex-col items-center bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
            <form action="" method="" className="px-12 h-[500px] flex flex-col items-center justify-center gap-y-10 bg-cover bg-center bg-gray-300 bg-blend-screen" style={{backgroundImage: `url(${bg1})`}}>
                <legend className="text-lg md:text-xl lg:text-2xl font-bold text-center tracking-wide">
                    <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                        START BOOKING NOW
                    </span>
                </legend>
                <input className='min-w-[256px] p-3' name='full-name' id='full-name' placeholder='Full name' type='text' required />
                <input className='min-w-[256px] p-3' name='email' id='email' placeholder='Email Address' type='email' required />
                <div className='self-start flex flex-col gap-y-4'>
                    <div className='flex text-[12.8px] gap-x-2'>
                        <input className='w-6 h-6 cursor-pointer' name='select-group' id='small-group' type='radio' required />
                        <label htmlFor='small-group'>Small Tour Group</label>                    
                    </div>
                    <div className='flex text-[12.8px] gap-x-2'>
                        <input className='w-6 h-6 cursor-pointer' name='select-group' id='large-group' type='radio' required />
                        <label htmlFor='large-group'>Large Tour Group</label>                    
                    </div>
                </div>
                <button type='submit' className='self-start bg-[#55C57A] text-[#F7F7F7] px-7 py-3 rounded-full text-xs md:text-sm lg:text-base cursor-pointer transition-transform hover:scale-105'>
                    NEXT STEP {String.fromCharCode(8594)}
                </button>
            </form>
        </div>
    )
}

export default BookNow;