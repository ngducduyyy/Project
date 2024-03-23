import Navbar from "./components/Navbar";
import Router from "./router";
import "./App.css"
import Footer from "./components/footer/Footer";
function App() {
   
   return (
      
      <>
         <Navbar />
         <main id="main" className="py-20 md:py-24">
            <Router />
         </main>
         <Footer />
      </>
   );
}

export default App;
