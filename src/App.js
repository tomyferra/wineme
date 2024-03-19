import { useEffect, useState } from 'react';
import WineList from './components/WineList';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
import './App.css';
import WineDataService from './services/wine-services';


function App() {

  const [wines,setWines] = useState([]);
  const [allwines,setallWines] = useState([]);
  const [totalQualifications,settotalQualifications] = useState(0);
  const [IsLoading,setIsLoading] = useState(true);
  let qualifications = 0;

  //mongodb call
  useEffect(() => {
    async function loadWines(){
      setIsLoading(true);
      WineDataService.getAll()
        .then(response => {
          setWines(response.data);
          qualifications = 0;
          setallWines(response.data);
          for (var i = 0; i < response.data.length; i++) {
            qualifications = response.data[i].Totalqualifications + qualifications;
          }
          settotalQualifications(qualifications);
          setIsLoading(false);
        })
        .catch(error => {
          alert(error);
        });
    }
    setIsLoading(false);
    loadWines();
  }, []);



  return (
    <div className="App mt-auto d-flex flex-column min-vh-100">
      <Navbar />
      <Hero IsLoading={IsLoading} wineCount={allwines.length} totalQualifications={totalQualifications} />
      <WineList IsLoadingWines={IsLoading}/>
      <Links />
    </div>
  );
}

export default App;