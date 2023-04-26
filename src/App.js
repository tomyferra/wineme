import WineList from './components/WineList';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import './App.css';

//import Varietals from './components/Varietals';


function App() {

  return (
    <div className="App mt-auto d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <WineList />
      {/* <Varietals /> */}
      <Links />
    </div>
  );
}

export default App;