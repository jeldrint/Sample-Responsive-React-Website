import Intro from './components/1_Intro';
import Description from './components/2_Description';
import Features from './components/3_Features';
import MenuIcon from './components/MenuIcon';

const App = () => {

    return (        
        <div className='min-h-screen lg:p-7 font-lato'>
            <MenuIcon />
            <div className='-z-20 bg-gray-100 h-full w-full'>
                <Intro />
                <Description />
                <Features />
            </div>
        </div>

    )
}

export default App;