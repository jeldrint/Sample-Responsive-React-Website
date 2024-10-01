import logo1 from '../img/logo-green-2x.png'
import GitIcon from '../img/github.png'

const Links = () => {

    return(
        <div id='links' className='w-full flex flex-col items-center justify-center bg-[#333333] text-[#F7F7F7] text-[12px]'>
            <div className='py-20 w-[350px] md:w-[750px] lg:w-[900px] xl:w-[1000px] flex flex-col items-center gap-y-10'>
                <img src={logo1} className='w-[150px]' />
                <div className='w-full flex flex-col gap-y-10 md:flex-row md:gap-x-10'>
                    <ul className='border-solid border-t-[0.8px] border-gray-400 p-3 w-full flex justify-center flex-wrap text-nowrap gap-x-3'>
                        <li><a href='/'>COMPANY</a></li>
                        <li><a href='/'>CONTACT US</a></li>
                        <li><a href='/'>CAREERS</a></li>
                        <li><a href='/'>PRIVACY POLICY</a></li>
                        <li><a href='/'>TERMS</a></li>
                    </ul>
                    <span className='border-solid border-t-[0.8px] border-gray-400 p-3 w-full flex items-center justify-center flex-wrap text-center'>Remade by John Eldrin Tolentino.&ensp;
                        <span>Check out his github here :   &ensp;</span>
                        <a href='https://github.com/jeldrint' target='_blank' rel='noopener' className='text-center'>
                            <img alt='Github Icon' src={GitIcon} className='w-7 inline-flex transition-opacity hover:opacity-50 hover:scale-110 invert' />
                        </a>
                        Original design by Jonas Schmedtmann.
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Links;