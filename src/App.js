import './App.css';
import Header from './Componant/Header/Header'
import SwipeButtons from './Componant/SwipeButton/SwipeButton'
import TinderCards from './Componant/TinderCards/TinderCards'


function App() {
  return (
    <div className="App">
     <Header/>
     <TinderCards />
     <SwipeButtons />
    </div>
  );
}

export default App;
