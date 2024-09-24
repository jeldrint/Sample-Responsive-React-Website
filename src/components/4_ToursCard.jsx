import tourImg1 from '../img/nat-5.jpg'
import tourImg2 from '../img/nat-6.jpg'
import tourImg3 from '../img/nat-7.jpg'

const ToursCard = ({tour, d, people, guides, stay, difficulty, price}) => {

    return(
        <div className="flex flex-col items-center justify-center max-w-[350px] gap-y-1 text-[#777777] rounded-sm shadow-lg">
            <div className={`relative w-full h-[185px] bg-cover bg-center bg-no-repeat bg-blend-screen clip-path-sm-1
                ${d === 3 ? 'bg-amber-600' : d === 7 ? 'bg-green-500' : 'bg-blue-600'}`} style={d === 3 ? {backgroundImage: `url(${tourImg1})`} : d === 7 ? {backgroundImage: `url(${tourImg2})`}:{backgroundImage: `url(${tourImg3})`}}>
                <span className={`absolute bottom-1/3 right-1 font-light text-[22.4px] text-white bg-opacity-70 px-3 py-2 ${d === 3 ? 'bg-amber-600' : d === 7 ? 'bg-green-500' : 'bg-blue-600'}`}>{tour.toUpperCase()}</span>
            </div>
            <ul className={`min-w-[350px] min-h-[200px] flex flex-col items-center justify-center text-[12px] gap-y-3`}>
                <li>{d} day tours</li>
                <li>Up to {people} people</li>
                <li>{guides} tour guides</li>
                <li>Sleep in {stay}</li>
                <li>Difficulty: {difficulty}</li>
            </ul>
            <div className={
                `min-w-[350px] min-h-[230px] clip-path-sm-2
                ${d === 3 ? 'bg-gradient-to-br from-amber-400 to-amber-600' : d === 7 ? 'bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]' : 'bg-gradient-to-br from-blue-400 to-blue-600'}`
            }>
                <span>{price}</span>
            </div>
        </div>
    )
}

export default ToursCard;