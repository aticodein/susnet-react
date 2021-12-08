import "./App.css";
import data from "../src/downloads/tiny-tines-sunset.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <h2>This is the React app I use for Tines Suset API data</h2>
        <a
          className="App-link"
          href="https://www.tines.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tines
        </a>
        <section>
          <p>Data should be here!</p>
        </section>
      </header>
    </div>
  );
}

export default App;
