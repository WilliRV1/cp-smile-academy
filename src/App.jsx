import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AcademyHome from './pages/AcademyHome';
import CourseTomografia from './pages/CourseTomografia';
import CourseEscaneo from './pages/CourseEscaneo';
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
      </Routes>
      <WhatsAppBubble />
      <Footer />
    </>
  );
}

export default App;
