import Intro from './main_components/1_Intro';
import MenuIcon from './sub_components/1_2MenuIcon';

const App = () => {

    return (        
        <div className='relative lg:p-7 flex flex-col items-center'>
            <MenuIcon />
            <div className='bg-gray-100 h-full w-full'>
                <Intro />
                <Intro />
            </div>
        </div>

    )
}

export default App;