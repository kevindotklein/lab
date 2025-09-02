import { Route, Routes } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Projects from './pages/Projects';
import Posts from './pages/Posts';
import About from './pages/About';
import ProfileCard from './components/ProfileCard';
import DateCounter from './components/DateCounter';

export default function App() {
  return (
    <>
      <MainNavbar />
      <ProfileCard />
      <DateCounter />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </>
  );
}
