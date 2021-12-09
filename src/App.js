import "./App.css";
import Sunset from "../src/downloads/tiny-tines-sunset.json";

function App() {
  const actions = Sunset.actions;
  const name = actions;

  console.log(name);

  const sunsetUrl = Sunset.actions[1].options.url;
  const locationUrl = Sunset.actions[0].options.url;
  const printAction = Sunset.actions[2].options.message;

  let mySunset = new Request(sunsetUrl);

  fetch(mySunset)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const sunset = data.results.sunset;
      console.log(sunset);
    });

  let myLocation = new Request(locationUrl);

  fetch(myLocation)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data.city);
    });

  let myPrintAction = new Request(printAction);

  console.log(myPrintAction);

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
                  <th>Urls</th>
                  <th>Message</th>
                  <th>ID</th>
                </tr>

                {name.map((item, i) => (
                  <tr key={(item.id = i + 1)}>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.options.url}</td>
                    <td>{item.options.message}</td>
                    <td>{item.id}</td>
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
