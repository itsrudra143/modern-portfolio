import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Intro />
      <Contact />
      <Services />
      <Testimonials />
      <Portfolio />
      <Experience />
      <Blog />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
