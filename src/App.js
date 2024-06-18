import "./App.css";
import Header from "./components/Header";  // Zaktualizowana œcie¿ka importu
import Searchbar from "./components/Searchbar";  // Dodany import

function App() {
    return (
        <div className="App">
            <Header />
            <Searchbar />
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
