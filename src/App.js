import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navigation-bar';
import HomeComponent from './components/home';
import AboutComponent from './components/about';
import ProjectsComponent from './components/projects';
import ExperienceComponent from './components/experience';

function App() {
    document.body.classList.add('default-style');
    return (
        <HashRouter basename="/">
            <div className="container">
                {/* Nav Bar */}
                <NavigationBar/>    

                {/* Main Component */}
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/about" element={<AboutComponent/>}/>
                    <Route path="/projects" element={<ProjectsComponent/>}/>
                    <Route path="/experience" element={<ExperienceComponent/>}/>
                </Routes>

            </div>
        </HashRouter>
  );
}

export default App;
