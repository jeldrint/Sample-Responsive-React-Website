import vid from '../img/video.mp4'
import FeedbackCard from './5_FeedbackCard';
import customer1Pic from '../img/nat-8.jpg'
import customer2Pic from '../img/nat-9.jpg'

const Feedback = () => {
    const msg1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.';

    return (
        <div id='feedback' className='min-h-[1030px] relative w-full py-20 text-[12.8px] flex flex-col items-center justify-center'>
            <div className='z-10 flex flex-col items-center gap-y-8 md:gap-y-12'>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-wide">
                    <span className="bg-clip-text text-transparent bg-gradient-to-tr from from-[#7ed56fcc] to-[#28b485cc]">
                        WE MAKE PEOPLE GENUINELY HAPPY
                    </span>
                </div>
                <FeedbackCard name='Mary Smith' slogan='I had the best week ever with my family' msg={msg1} pic={customer1Pic} />
                <FeedbackCard name='Jack Wilson' slogan='WOW! My life is completely different now' msg={msg1} pic={customer2Pic} />
                <a href='/' className='p-2 rounded-sm text-[#28b485cc] text-sm lg:text-base underline cursor-pointer transition-colors hover:bg-[#28b485cc] hover:text-[#F7F7F7]'>Read all stories {String.fromCharCode(8594)}</a>
            </div>
            <video autoPlay muted loop className='absolute top-0 min-w-full min-h-full object-cover opacity-10'>
                <source src={vid} type='video/mp4' />
            </video>
        </div>
    )
}

export default Feedback;

