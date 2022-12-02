import '../src/assest/StyleCss.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import What from './Component/What/What';
import Guide from './Component/Header/Guide/Guide';
import Documents from './Component/Documents/Documents';
import SellerRequest from './Component/SellerRequest/SellerRequest';
import "aos/dist/aos.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/tezal' element={<Home />} />
        <Route exact path='/what' element={<What />} />
        <Route exact path='/Guide' element={<Guide />} />
        <Route exact path='/Documents' element={<Documents />} />
        <Route exact path='/SellerRequest' element={<SellerRequest />} />
        <Route path="*" element={<Navigate replace to="/tezal" />} />
        <Route path="/" element={<Navigate replace to="/tezal" />} />
        <Route path="" element={<Navigate replace to="/tezal" />} />
      </Routes>
    </Router>
  );
}

export default App;
