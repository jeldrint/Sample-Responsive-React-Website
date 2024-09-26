import logo1 from '../img/logo-green-2x.png'

const Links = () => {

    return(
        <div id='links' className='w-full flex flex-col items-center justify-center bg-[#333333] text-[#F7F7F7] text-[11.2px]'>
            <div className='py-20 w-[350px] md:w-[750px] lg:w-[900px] xl:w-[1000px] flex flex-col items-center gap-y-10'>
                <img src={logo1} className='w-[150px]' />
                <div className='flex flex-col gap-y-10 md:flex-row md:gap-x-20'>
                    <ul className='border-solid border-t-[0.8px] border-gray-400 p-3 w-full flex justify-center flex-wrap text-nowrap gap-x-3'>
                        <li><a href='/'>COMPANY</a></li>
                        <li><a href='/'>CONTACT US</a></li>
                        <li><a href='/'>CAREERS</a></li>
                        <li><a href='/'>PRIVACY POLICY</a></li>
                        <li><a href='/'>TERMS</a></li>
                    </ul>
                    <span className='border-solid border-t-[0.8px] border-gray-400 p-3 w-full flex flex-wrap text-justify'>Built by Jonas Schmedtmann for his online course Advanced CSS and Sass. Copyright © by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!</span>
                </div>
            </div>

        </div>
    )
}

export default Links;