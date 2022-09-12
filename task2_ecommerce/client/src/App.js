 import './App.css';
 import {Navbar} from "./components";
 import {Router} from "./pages"
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router/>
      <ToastContainer/>
    </div>
  );
}

export default App;