import { v4 as uuidv4 } from 'uuid';
import DuriguttiMalbec from '../images/DuriguttiMalbec.png';
import JauriaLaAzul from '../images/JauriaLaAzul.png';
import CorderoMalbec from '../images/CorderoMalbec.png';
import Clos7 from '../images/Clos7.png';
import PuroOro from '../images/PuroOro.png';
import EmmaBonarda from '../images/EmmaBonarda.png';
import LamadridGranReserva from '../images/LamadridGranReservaMalbec.png';

export const Wines = [
  {
    Name: "Durigutti Malbec",
    Winery: "Durigutti",
    Variety: "Malbec",
    Year: "2021",
    Totalqualifications: "20",
    Avgqualifications:"3.7",
    Totalscore: "74",
    Marinates: "Ternera, Ave, Cordero",
    Image: DuriguttiMalbec,
    Region: "Tupungato",
    Description: "Deliciosos aromas frutales, algo de cuero presente. Concentración de frutos rojos y vainilla, taninos sedosos y un excelente retro gusto.",
    Key: uuidv4()
  },
  {
    Name: "Cordero con piel de Lobo",
    Winery: "Mosquita Muerta",
    Variety: "Malbec",
    Year: "2021",
    Totalqualifications: "0",
    Avgqualifications:"0",
    Totalscore: "0",
    Marinates: "Ternera, Ave, Cordero",
    Image: CorderoMalbec,
    Region: "Maipu",
    Description: "Excelente malbec. Fresco. Frutado. Cuerpo medio. Elegante en nariz. Facil de tomar. Su paso por madera del 50% es casi imperceptible.",
    Key: uuidv4()
  },
  {
    Name: "Jauria",
    Winery: "La Azul",
    Variety: "Malbec, Cabernet Sauvignon, Cabernet Franc",
    Year: "2020",
    Totalqualifications: "10",
    Avgqualifications:"4.7",
    Totalscore: "47",
    Marinates: "Ternera, Ave, Cordero",
    Image: JauriaLaAzul,
    Region: "Tunuyan",
    Description: "Al probar este vino podemos encontrar un abanico de sensaciones, aromas a frutillas, ciruelas, hierbas frescas, notas cárnicas, ahumados, vainilla y chocolate, complementados con muy buena estructura, acidez, y taninos persistentes, obtenidos en su estadía en barricas de roble francés y americano.",
    Key: uuidv4()
  },
  {
    Name: "Clos de los Siete",
    Winery: "Michel Rolland",
    Variety: "Syrah, Petit Verdot, Malbec, Cabernet Sauvignon, Cabernet Franc",
    Year: "2020",
    Totalqualifications: "10",
    Avgqualifications:"3.9",
    Totalscore: "39",
    Marinates: "Ternera, Ave, Cordero, Champignones, Queso Azul",
    Image: Clos7,
    Region: "Vistaflores",
    Description: "Vino de color rubí profundo, aromas a frutos negros y ciruela acompañados de delicadas notas florales. En boca se muestra de cuerpo intenso y a la vez amable, con un largo final de taninos elegantes y sedosos",
    Key: uuidv4()
  },
  {
    Name: "Puro Corte D'Oro",
    Winery: "Dieter Meier",
    Variety: "Malbec, Cabernet Sauvignon",
    Year: "2018",
    Totalqualifications: "120",
    Avgqualifications:"4.1",
    Totalscore: "492",
    Marinates: "Ternera, Pasta, Cordero, Aves",
    Image: PuroOro,
    Region: "Agrelo",
    Description: "Color púrpura intenso. En nariz destacan aromas a frutas oscuras con algo de frutos rojos que dan frescura al conjunto. Tambiénd estaca el aporte de roble con aromas a café, anís, chocolate y una nota sutil a canela. En boca es complejo, destacando sabores a frutas, taninos muy finos y el roble muy bien amalgamado. Un vino fino y elegante que desborda en sabores.",
    Key: uuidv4()
  },
  {
    Name: "Emma",
    Winery: "Zuccardi",
    Variety: "Bonarda",
    Year: "2018",
    Totalqualifications: "1",
    Avgqualifications:"2",
    Totalscore: "2",
    Marinates: "Ternera, Pasta, Aves",
    Image: EmmaBonarda,
    Region: "Paraje Altamira y San Pablo",
    Description: "Se destaca por su color profundo y matices purpuras violáceos, y una nariz en la que se perciben aromas típicos de frutas rojas y negras maduras -como frutillas, frambuesas, moras y cerezas negras. En boca su entrada es voluminosa, con buen desarrollo, cuerpo intenso y sedoso, donde se destacan la suavidad de los taninos y su redondez.",
    Key: uuidv4()
  },
  {
    Name: "Lamadrid Gran Reserva",
    Winery: "Lamadrid",
    Variety: "Malbec",
    Year: "2016",
    Totalqualifications: "1",
    Avgqualifications:"4",
    Totalscore: "4",
    Marinates: "Ternera, Cordero, Aves",
    Image: LamadridGranReserva,
    Region: "Agrelo",
    Description: "Con aromas de menta, tomillo y roble, además de fruta, resulta complejo; al paladar es fluido, tenso y fresco por un lado, brioso por otro, con estructura y final prolongado. Lleno de sabor, un ejemplar para beber a placer.",
    Key: uuidv4()
  }
];
