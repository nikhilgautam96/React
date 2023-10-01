import './App.css';
import { Greet } from './component/Greet';
function App() {
    let name = 'Nikhil Gautam';
    return (
        <div className="App">
            <h2>Welcome to {name}'s App.</h2>
            <h3>
                Date - {new Date().getDate()} of{' '}
                {new Date().toLocaleString('en-US', { month: 'long' })}
            </h3>
            <Greet name="Nikhil" age={21} />
            <Greet name="Aditya" age={24} />
            <Greet name="Virat" age={29} />
            <Greet />
        </div>
    );
}

// In react data always flow from "parent -> child".
export default App;
