import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Content from './components/Content'; // Fix the typo from 'COntent'
import Marquee from './components/Marquee';
import Courses from './components/Courses';
import Table from './components/Table';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import AddUser from './components/CRUD/AddUser';
import Home from './components/CRUD/Home'
import EditUser from './components/CRUD/EditUser';

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      
      {/* Define routes for different components */}
      <Routes>
        <Route path="/" element={
          <>
            <Content />
            <Marquee />
            <Courses />
            <Table />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/editUser/:id" element={<EditUser />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
