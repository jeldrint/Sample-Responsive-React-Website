import { createContext, useState } from 'react';
import Intro from './components/1_Intro';
import Description from './components/2_Description';
import Features from './components/3_Features';
import Tours from './components/4_Tours';
import Feedback from './components/5_Feedback';
import BookNow from './components/6_Booknow';
import Links from './components/7_Links';
import Menu from './components/Menu';
import ToursCardNotice from './components/ToursCardNotice';

export const DisplayToursCardContext = createContext();

const App = () => {
    const [displayToursCard, setDisplayToursCard] = useState(false);

    return (        
        <div className='min-h-screen font-lato'>
            <ToursCardNotice displayToursCard={displayToursCard} setDisplayToursCard={setDisplayToursCard} />
            {!displayToursCard && <Menu displayToursCard={displayToursCard} />}
            <div className='lg:p-7 w-full bg-[#F7F7F7] text-[#777777]'>
                <Intro />
                <Description />
                <Features />
                <DisplayToursCardContext.Provider value={{displayToursCard, setDisplayToursCard}}>
                    <Tours />
                </DisplayToursCardContext.Provider>
                <Feedback />
                <BookNow />
                <Links />
            </div>
        </div>

    )
}

export default App;