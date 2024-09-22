import Intro from './main_components/1_Intro';
import MenuIcon from './sub_components/1_2MenuIcon';

const App = () => {

    return (        
        <div className='lg:p-7'>
            <MenuIcon />
            <div className='bg-gray-100 h-full w-full'>
                <Intro />
                <Intro />
            </div>
        </div>

    )
}

export default App;