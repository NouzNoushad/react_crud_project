import Header from "./Header";
import './App.css';
import Create from "./Create";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Edit from "./Edit";

const App = () => {
  return ( 
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </div>
      
    </Router>
   )
}
 
export default App;
