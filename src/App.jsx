import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto relative">
        <Intro />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default App;