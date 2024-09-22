import IntroComponent from './components/1_intro';

const App = () => {

    return (        
        <div className='p-7 flex flex-col items-center'>
            <div className='bg-gray-100 h-full w-full'>
                <IntroComponent />
                <IntroComponent />
            </div>
        </div>

    )
}

export default App;