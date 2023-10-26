import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import NeedBlood from './pages/NeedBlood';
import DonateBlood from './pages/DonateBlood';
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/needblood" element={<NeedBlood />} /> 
        <Route path="/needblood/:cityId" element={<NeedBlood />} />
        <Route path="/donateblood" element={<DonateBlood />} />
        <Route path="/donateblood/:cityId" element={<DonateBlood />} />
        <Route path="/contactus" element={<Contact />} />
        
        

      </Routes>
    </Router>
  );
}


export default App;
