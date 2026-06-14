// App.jsx
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Components/pages/Home";
import AboutMe from "./Components/pages/AboutMe";
import TeachingPhilosophy from "./Components/pages/TeachingPhilosophy";
import MyAchievements from "./Components/pages/MyAchievements";
import Contact from "./Components/pages/Contact";

// Temporary placeholder components for upcoming pages

const Courses = () => <div className="text-white p-10">Courses Page</div>;

const Resources = () => <div className="text-white p-10">Resources Page</div>;
const Blog = () => <div className="text-white p-10">Blog Page</div>;

function App() {
  return (
    <BrowserRouter>
      {/* Main Background */}
      <div className="min-h-screen bg-[#050505] text-white">
        {/* Fixed Left Navigation */}
        <NavBar />

        {/* Main Content Area */}
        <main className="pt-20 lg:pt-0 lg:pl-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/teaching" element={<TeachingPhilosophy />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/achievements" element={<MyAchievements />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
