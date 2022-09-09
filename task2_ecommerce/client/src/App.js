 import './App.css';
 import {Navbar} from "./components";
 import {Router} from "./pages"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router/>
    </div>
  );
}

export default App;