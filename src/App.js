
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>  
        {/* Example of props below */}
        <Navbar title="Ashwin's React Page" about="About Us"/>
        
          <div className="container my-3">
              <TextForm heading="Enter The Text To Analyse Below"/>
          </div>
    </>
  );
}

export default App;
