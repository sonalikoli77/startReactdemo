
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import LoginUI from './LoginUI/LoginUI';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginUI/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
