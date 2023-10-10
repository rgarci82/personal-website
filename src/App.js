import { useState } from "react";
import ContactModal from "./components/ContactModal";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <LandingPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <TechStack />
      <Projects />
      <ContactModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;
