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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FilmFeed!!</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Feed />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
