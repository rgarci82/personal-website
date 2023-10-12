import { useState } from "react";
import ContactModalIcon from "./components/ContactModalIcon";
import LandingPage from "./components/sections/LandingPage";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <LandingPage isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <TechStack />
      <Projects />
      <ContactModalIcon isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;
