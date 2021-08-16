import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Stats from "./components/Stats";
import About from "./components/About";
import Detailed from "./components/Detailed";

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Head />
        <Stats />
        <About />
        <Detailed />
      </div>
      <Footer />
    </>
  );
}

export default App;
