
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>  
        {/* Example of props below */}
        <Navbar title="Ashwin's React Page" about="About Us"/>
        
          <div className="container my-3">
              <TextForm heading="Enter The Text To Analyse Below"/>
              <About/>
          </div>
    </>
  );
}

export default App;
