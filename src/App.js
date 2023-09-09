
import './App.css';
import ProfileCards from './Pages/ProfileCards';
import TrackCard from './Pages/TrackCard';
import Uploadpage from './Pages/Uploadpage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Profilepage from './components/Profilepage';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Router>
      <Navbar/>

      <Routes>

      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profilepage />} />
      <Route path="/UploadPage" element={<Uploadpage />} />
      <Route path="/ProfileCard" element={<ProfileCards />} />
      <Route path="/TrackCard" element={<TrackCard />} />

      </Routes>

    </Router>
      </>
   
  
  );
}

export default App;
