import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AcademyHome from './pages/AcademyHome';
import CourseTomografia from './pages/CourseTomografia';
import CourseEscaneo from './pages/CourseEscaneo';
import CourseDerecho from './pages/CourseDerecho';
import WhatsAppBubble from './components/WhatsAppBubble';

function App() {
  return (
    <>
      <TopBar />
      <div className="noise-overlay"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AcademyHome />} />
        <Route path="/cursos/tomografia" element={<CourseTomografia />} />
        <Route path="/cursos/escaneo-digital" element={<CourseEscaneo />} />
        <Route path="/cursos/derecho-medico" element={<CourseDerecho />} />
        <Route path="*" element={<AcademyHome />} />
      </Routes>
      <WhatsAppBubble />
      <Footer />
    </>
  );
}

export default App;
