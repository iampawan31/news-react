import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex mt-2">
        <div className="flex text-xl font-semibold uppercase px-4 py-2">
          News App
        </div>
        <ul className="flex">
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">Home</li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Business
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Entertainment
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            General
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Health
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Science
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Sports
          </li>
          <li className="px-4 py-2 mx-2 uppercase bg-gray-300 rounded">
            Technology
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
