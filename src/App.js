import { useEffect, useState } from 'react';
import WineList from './components/WineList';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Hero from './components/Hero';
// import ProtectedComponent from './components/useProtectedData';
// import LoginForm from './components/Login';
import './App.css';
import WineDataService from './services/wine-services';
import login from './services/api-login';
const email = process.env.REACT_APP_EMAIL;
const password = process.env.REACT_APP_PASSWORD;

function App() {
  const [wines,setWines] = useState([]);
  const [allwines,setallWines] = useState([]);
  const [totalQualifications,settotalQualifications] = useState(0);
  const [IsLoading,setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadWines() {
      try {
        setIsLoading(true);

        let token = sessionStorage.getItem("token");

        if (!token) {
          const email = process.env.REACT_APP_API_USER_EMAIL;
          const password = process.env.REACT_APP_API_USER_PASSWORD;
          const success = await login(email, password);
          if (!success) {
            alert("Login fallido. No se pudieron cargar los vinos.");
            return;
          }
          token = sessionStorage.getItem("token"); // Obtener el token después del login
        }

        if (isMounted) {
          const response = await WineDataService.getAll();
          let qualifications = 0;
          setWines(response.data);
          setallWines(response.data);
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].Totalqualifications >= 0) {
              qualifications += response.data[i].Totalqualifications;
            }
          }
          settotalQualifications(qualifications);
        }
      } catch (error) {
        if (isMounted) {
          alert("Error al cargar los vinos:", error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadWines();

    return () => {
      isMounted = false;
    };
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