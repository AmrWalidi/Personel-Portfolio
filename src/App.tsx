import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import "./Components/Home/Home.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
    </>
  );
}
