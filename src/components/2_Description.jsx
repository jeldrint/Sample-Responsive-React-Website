import nat1 from '../img/nat-1-large.jpg'
import nat2 from '../img/nat-2-large.jpg'
import nat3 from '../img/nat-3-large.jpg'

const Description = () => {
    return(
        <div className='min-h-[65vh] gap-y-8 md:gap-y-12 w-full flex flex-col items-center justify-center'>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">EXCITING TOURS FOR ADVENTUROUS PEOPLE</span>
            </div>
            <div className="w-[320px] md:min-w-[700px] lg:min-w-[950px] flex flex-col md:flex-row md:gap-x-[80px]">
                <div className="w-full text-[#777777] text-[12.8px] lg:text-[14.4px] text-justify flex flex-col items-center gap-y-3 md:gap-y-8">
                    <div className="w-full flex flex-col gap-y-2 ">
                        <span className="font-bold">YOU'RE GOING TO FALL IN LOVE WITH NATURE</span>
                        <span className="leading-loose ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</span>
                    </div>
                    <div className="w-full flex flex-col gap-y-2">
                        <span className="font-bold">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</span>
                        <span className="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</span>
                    </div>
                    <a href='/' className='p-2 rounded-sm self-start text-[#7ed56fcc] font-bold underline cursor-pointer transition-colors hover:bg-[#28b485cc] hover:text-white'>Learn more {String.fromCharCode(8594)}</a>

                </div>
                <div className='h-[200px] md:h-[300px] lg:h-[350px] w-full flex relative'>
                    <img src={nat1} alt='nature 1' className='object-cover absolute top-10 md:top-0 md:left-0 w-[135px] md:w-[218px] lg:w-[300px] duration-300 hover:scale-125 hover:z-10 rounded-sm'></img>
                    <img src={nat2} alt='nature 2' className='object-cover absolute z-10 md:z-0 top-7 right-[100px] md:top-[45px] md:right-0 w-[135px] md:w-[218px] lg:w-[300px] duration-300 hover:scale-125 hover:z-10 rounded-sm'></img>
                    <img src={nat3} alt='nature 3' className='object-cover absolute top-[43px] right-0 md:top-[120px] md:right-1/4 lg:bottom-1/2 w-[135px] md:w-[218px] lg:w-[300px] duration-300 hover:scale-125 hover:z-10 rounded-sm'></img>
                </div>
            </div>
        </div>
    )
}

export default Description;