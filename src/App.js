// import React from 'react';
// import './App.css';
// import Header from './Components/Header';
// import Banner from './Components/Banner';
// import Technologies from './Components/Techonologies';
// import OurTeam from './Components/OurTeam';
// import Footer from './Components/Footer';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Banner />
//       <Technologies />
//       <OurTeam />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import main from './Components/Main/main'
import Login from './Components/Login/index';
import Detail from './Components/Main/Detail/detail';
import Register from './Components/Main/Register/index';
import Dashboard from './Components/Dashboard/index';
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = '/' component = {main}/>
      <Route path ='/login' component ={Login}/>
      <Route path ='/detail' component={Detail}/>
      <Route path = '/Register' component ={Register}/>
      <Route path='/dashboard' component={Dashboard} />

          </div>
    </Router>
  );
}

export default App;