import bg1 from '../img/hero.jpg'

const IntroComponent = () => {
    return(
        <div className='h-[95vh] w-full bg-cover bg-center bg-no-repeat clip-bg-1' style={{backgroundImage: `url(${bg1})`}}>
            <div className='h-full w-full bg-gradient-to-br from-[#7ed56fcc] to-[#28b485cc]'>
                
            </div>
        </div>

    )
}

export default IntroComponent;