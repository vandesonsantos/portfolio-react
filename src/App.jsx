import Header from "./components/header/header"
import Home from "./components/home/home"
import Footer from "./components/footer/footer"


function App() {
  return (
    <>
      <section className="home">
        <Header />

        <Home />
      </section>

      <Footer />
    </>
  )
}

export default App
