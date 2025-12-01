// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>あ</h1>
//     </>
//   );
// }

// export default App;

import "./App.css";

import Header from "./components/_header/Header";
import Skills from "./components/_skills/Skills";
import Firstview from "./components/_firstview_temp/Firstview";
import Works from "./components/_works/Works";
import Contact from "./components/_contact/Contact";
import Footer from "./components/_footer/Footer";
import About from "./components/_about/About";

function App() {
  return (
    <>
      <Header />
      <Firstview />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
