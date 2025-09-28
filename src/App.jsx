import './App.css'
import CallToAuction from './Components/CallToAuction'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <main>
        <div className="container-mid max-w-[1360px] mx-auto">
          <Faq></Faq>
          <CallToAuction></CallToAuction>
        </div>
      </main>
      <footer>
          <div className="container-mid max-w-[1360px] mx-auto">
            <Footer></Footer>        
          </div>
      </footer>
    </>
  )
}

export default App
