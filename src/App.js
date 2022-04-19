import './App.css';
import { GlobalProvider } from './context/GlobalContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Feed from './Feed';
import Login from './Login';
import Diary from './Diary';
import Lists from './Lists';
import SpecificMovie from './SpecificMovie.tsx';
import Profile from './Profile';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import Settings from './Settings';
import SpecificList from './SpecificList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<Feed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists=:listName" element={<SpecificList />} />
          <Route path="/movie=:filmid" element={<SpecificMovie />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Modal></Modal>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
