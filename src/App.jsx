// import React from "react";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicePage from "./pages/Services";
import Subscribe from "./pages/Subscribe";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
         <Route path="/subscribe" element={<Subscribe />} />
       
      </Routes>
    </Router>
  );
}

export default App;

