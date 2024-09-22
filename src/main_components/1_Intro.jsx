import bg1 from '../img/hero.jpg'
import IntroHeader from '../sub_components/1_1IntroHeader';

const Intro = () => {
    return(
        <div className='h-[95vh] w-full bg-cover bg-center bg-no-repeat clip-bg-1' style={{backgroundImage: `url(${bg1})`}}>
            <div className='p-9 h-full w-full bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
                <IntroHeader />
            </div>
        </div>
    )
}

export default Intro;