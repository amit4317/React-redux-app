import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Apple from './apple.png'

import Mydashboard from "./dashboard";
import Myapi from "./api";
import Myproduct from "./product";
import Myuser from "./user";
import Mybook from "./book";

function App() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand">React with Redux</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/"> Dashboard </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/api"> Manage API </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/product"> Manage Product </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/user"> Manage User </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/book"> Manage Book </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Mydashboard />} />
        <Route exact path="/product" element={<Myproduct />} />
        <Route exact path="/api" element={<Myapi />} />
        <Route exact path="/user" element={<Myuser />} />
        <Route exact path="/book" element={<Mybook />} />
      </Routes>

      <p>This is a sample text inside new_branch
        <img src={Apple}  style={{ width:"200px", height:"200px" }} alt="apple"/>
      </p>
        <img src={require('./apple.png')} alt="apple"/> 

    </HashRouter>
  );
}

export default App;
