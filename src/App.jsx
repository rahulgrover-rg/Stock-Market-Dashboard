import "./App.css";
import Main from "./pages/Main";
import Market from "./pages/Market";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import Wallet from './pages/Wallet'
import Exchange from './pages/Exchange'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main />}/>
          <Route path='/wallet' element={<Wallet />}/>
          <Route path='/exchange' element={<Exchange />}/>
          <Route path='/community' element={<Community />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/support' element={<Support />}/>
          <Route path='/feedback' element={<Feedback />}/>
          <Route path='/market' element={<Market />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
