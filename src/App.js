
import { WebChatContainer } from '@ibm-watson/assistant-web-chat-react';
import './App.css';
import ProfileCards from './Pages/ProfileCards';
import ReciveDocs from './Pages/ReciveDocs';
import TrackCard from './Pages/TrackCard';
import Uploadpage from './Pages/Uploadpage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import PaymentPage from './components/PaymentPage';
import Profilepage from './components/Profilepage';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const webChatOptions = {
    integrationID: "44bbd475-6c34-41d6-8775-63514855a585",
    region: "au-syd",
    serviceInstanceID: "e6126829-b55a-4d52-b47d-a5e5b2cb0d50"
  };


  return (
    <>

    <Router>
      <Navbar/>

      <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profilepage />} />
      <Route path="/UploadPage" element={<Uploadpage />} />
      <Route path="/ProfileCard" element={<ProfileCards />} />
      <Route path="/TrackCard" element={<TrackCard />} />
      <Route path="/ReciveDocs" element={<ReciveDocs />} />

      </Routes>
      <WebChatContainer config={webChatOptions}/>

    </Router>
      </>
   
  
  );
}

export default App;
