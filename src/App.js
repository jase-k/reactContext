import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import {createContext, useState} from 'react';
export const AppContext = createContext();

function App() {
  const [name, setName] = useState("there")

  return (
    <div className="App">
      <AppContext.Provider value={{name, setName}}>
        <Wrapper></Wrapper>
      </AppContext.Provider>
    </div>
  );
}

export default App;
