import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AcademyHome from './pages/AcademyHome';
import CourseTomografia from './pages/CourseTomografia';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AcademyHome />} />
        <Route path="/cursos/tomografia" element={<CourseTomografia />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
