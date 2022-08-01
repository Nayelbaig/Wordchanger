//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


 
function App() {
  return (
    <>
    <Navbar title = "Textutils" aboutText = "About Textutils" />
    <div className = "container my-3">  
      { <Textform heading = "Enter your text here to analyze"></Textform> }
      <About></About>
     </div>
   </>
  );
}

export default App;
