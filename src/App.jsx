import Header from "./components/header/header"
import Home from "./components/home/home"
import About from "./components/about/about"
import Footer from "./components/footer/footer"


function App() {
  return (
    <>
      <section className="home">
        <Header />

        <Home />
      </section>

      <About />

      <Footer />
    </>
  )
}

export default App
