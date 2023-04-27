import WineList from './components/WineList';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import AddWine from './components/AddWine';
import './App.css';

//import Varietals from './components/Varietals';


function App() {

  return (
    <div className="App mt-auto d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <WineList />
      {/* <AddWine /> */}
      {/* <Varietals /> */}
      <Links />
    </div>
  );
}

export default App;