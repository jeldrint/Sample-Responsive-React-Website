import tourImg1 from '../img/nat-5.jpg'
import tourImg2 from '../img/nat-6.jpg'
import tourImg3 from '../img/nat-7.jpg'

const ToursCard = ({tour, d, people, guides, stay, difficulty, price}) => {

    return(
        <div className="flex flex-col items-center justify-center w-[300px] sm:w-[350px] md:w-[260px] lg:w-[330px] gap-y-1 rounded-sm shadow-lg">
            <div className={`relative w-full h-[185px] bg-cover bg-center bg-no-repeat bg-blend-screen clip-path-sm-1
                ${d === 3 ? 'bg-amber-600' : d === 7 ? 'bg-green-500' : 'bg-blue-600'}`} style={d === 3 ? {backgroundImage: `url(${tourImg1})`} : d === 7 ? {backgroundImage: `url(${tourImg2})`}:{backgroundImage: `url(${tourImg3})`}}>
                <span className={`absolute bottom-1/3 right-0 font-light text-[22.4px] text-[#F7F7F7] text-right bg-opacity-70 px-3 py-2 ${d === 3 ? 'bg-amber-600' : d === 7 ? 'bg-green-500' : 'bg-blue-600'}`}>{tour.toUpperCase()}</span>
            </div>
            <ul className={`w-full min-h-[200px] flex flex-col items-center justify-center text-[12px] gap-y-3`}>
                <li className='border-s-orange-100'>{d} day tours</li>
                <li>Up to {people} people</li>
                <li>{guides} tour guides</li>
                <li>Sleep in {stay}</li>
                <li>Difficulty: {difficulty}</li>
            </ul>
            <div className={
                `w-full min-h-[230px] clip-path-sm-2 flex flex-col items-center justify-evenly
                ${d === 3 ? 'bg-gradient-to-br from-amber-400 to-amber-600' : d === 7 ? 'bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]' : 'bg-gradient-to-br from-blue-400 to-blue-600'}`
            }>
                <div className='flex flex-col items-center text-[#F7F7F7] font-light'>
                    <span className='text-[12px]'>ONLY</span>
                    <span className='text-[32px]'>${price}</span>
                </div>
                <a href='/' className='bg-[#F7F7F7] px-9 py-5 rounded-full text-xs md:text-sm lg:text-base cursor-pointer transition-all hover:animate-bounce'>
                BOOK NOW!
                </a>
            </div>
        </div>
    )
}

export default ToursCard;