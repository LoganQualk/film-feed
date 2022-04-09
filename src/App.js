import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Feed from './Feed';
import Login from './Login';
import Diary from './Diary';
import Lists from './Lists';
import Movie from './Movie';
import Profile from './Profile';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
