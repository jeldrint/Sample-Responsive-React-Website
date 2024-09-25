import vid from '../img/video.mp4'
import FeedbackCard from './5_FeedbackCard';
import customer1Pic from '../img/nat-8.jpg'
import customer2Pic from '../img/nat-9.jpg'

const Feedback = () => {
    const msg1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.';

    return (
        <div id='feedback' className='relative py-[100px] w-full gap-y-8 md:gap-y-12 flex flex-col items-center justify-center'>
            <video id='feedback' autoPlay muted loop className='absolute h-full w-full object-cover flex flex-col items-center justify-center opacity-10'>
                <source src={vid} type='video/mp4' />
            </video>
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-center tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                    WE MAKE PEOPLE GENUINELY HAPPY
                </span>
            </div>
            <FeedbackCard name='Mary Smith' slogan='I had the best week ever with my family' msg={msg1} pic={customer1Pic} />
            <FeedbackCard name='Jack Wilson' slogan='WOW! My life is completely different now' msg={msg1} pic={customer2Pic} />
        </div>
    )
}

export default Feedback;

