import Intro from './components/1_Intro';
import Description from './components/2_Description';
import MenuIcon from './components/MenuIcon';

const App = () => {

    return (        
        <div className='min-h-screen lg:p-7 font-lato'>
            <MenuIcon />
            <div className='bg-gray-100 h-full w-full'>
                <Intro />
                <Description />
                <Intro />
            </div>
        </div>

    )
}

export default App;