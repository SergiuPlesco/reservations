import "./App.css";

function App() {
  let firstName: string = "Serj";
  let lastName: string = "Plesco";

  return (
    <div className="app__container">
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
    </div>
  );
}

export default App;
