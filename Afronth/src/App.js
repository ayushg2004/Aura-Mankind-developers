import Knowledge from "./component/Knowledge";
import MainPage from "./component/Mainpage";
import Pitch from "./component/Pitch";
import Evcycle from "./component/Evcycle";
import Broker from "./component/Broker";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { createContext, useEffect, useState } from "react";
import AskPitchORInvest from "./component/AskPitchORInvest";
import Investorlogin from "./component/Investorlogin";
import Investorsignup from "./component/Investorsignup";
import Pitchidea from "./component/Pitchidea";
import Showidea from "./component/Showidea";
import Station from "./component/Station";

// Create the context for JWT token
const jwttoken = createContext();

function App() {
  const [islogin, setislogin] = useState(false); // Default login state is false
  const [arr, setarr] = useState([]);

  // Function to check login status by verifying the presence of token in localStorage
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    return token ? true : false; // Return true if token exists, else false
  };

  // Using useEffect to check login status on the first render
  useEffect(() => {
    const loggedIn = checkLoginStatus(); // Call checkLoginStatus to verify if logged in
    setislogin(loggedIn); // Update the login state based on the token presence
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Function to store JWT token and user info
  const tokenstoreftn = (values) => {
    localStorage.setItem('token', values.token);
    localStorage.setItem('name', values.user.firstname);
    localStorage.setItem('email', values.user.email);
    setislogin(true); // Set login state to true after storing token
  };

  // Function to store pitch idea data
  const pitchideadata = (data) => {
    setarr(data);
  };

  // Logout function to remove token and clear login state
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setislogin(false); // Set login state to false after logout
  };

  return (
    <>
      {/* Provide the context to children */}
      <jwttoken.Provider value={{ tokenstoreftn, logout, islogin, arr, pitchideadata }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/pitch" element={<Pitch />} />
            <Route path="/evcycle" element={<Evcycle />} />
            <Route path="/stations" element={<Station />} />
            <Route path="/broker" element={<Broker />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/askpitchorinvest" element={<AskPitchORInvest />} />
            <Route path="/investlogin" element={<Investorlogin />} />
            <Route path="/investsignup" element={<Investorsignup />} />
            <Route path="/pitchidea" element={<Pitchidea />} />
            <Route path="/showidea" element={<Showidea />} />
          </Routes>
        </BrowserRouter>
      </jwttoken.Provider>
    </>
  );
}

export default App;
export { jwttoken };
