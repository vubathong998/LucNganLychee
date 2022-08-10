import Header from '~/Component/Header/Header';
import Content from '~/Component/Content/Content';
import { useState, createContext } from 'react';
export const CurrentLanguageContext = createContext();

function App() {
    const [currentContext, setCurrentContext] = useState('VN');

    return (
        <CurrentLanguageContext.Provider value={[currentContext, setCurrentContext]}>
            <div className="App">
                <div>
                    <Header />
                    <Content />
                </div>
            </div>
        </CurrentLanguageContext.Provider>
    );
}

export default App;
