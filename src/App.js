import "./App.css";
import Sunset from "../src/downloads/tiny-tines-sunset.json";

function App() {
  const actions = Sunset.actions;
  const name = actions;
  const options = Sunset.options;
  console.log(name);

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
          <div>
            <table border="2">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Url</th>
                  <th>Message</th>
                </tr>

                {name.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.options.url}</td>
                    <td>{item.options.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
