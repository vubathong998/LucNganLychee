import Header from '~/Component/Header/Header';
import Content from '~/Component/Content/Content';
import { useState, createContext } from 'react';
export const CurrentContext = createContext();

function App() {
    const [currentLanguage, setCurrentLanguage] = useState('VN');

    return (
        <CurrentContext.Provider value={[currentLanguage, setCurrentLanguage]}>
            <div className="App">
                <div>
                    <Header />
                    <Content />
                </div>
            </div>
        </CurrentContext.Provider>
    );
}

export default App;
