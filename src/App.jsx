import Intro from './components/1_Intro';
import Description from './components/2_Description';
import Features from './components/3_Features';
import Tours from './components/4_Tours';
import MenuIcon from './components/MenuIcon';

const App = () => {
    return (        
        <div className='min-h-screen lg:p-7 font-lato'>
            <MenuIcon />
            <div className='bg-gray-100'>
                <Intro />
                <Description />
                <Features />
                <Tours />
            </div>
        </div>

    )
}

export default App;