// Aquí es donde montamos la estructura de nuestro proyecto
// De aquí se borró el logo que trae por defecto y también se borra la tag donde es llamado <img>. Despues se borra el logo de los archivos en la carpeta src
// Puede borrarse setupTests.js también
// También se borra App.test.js
// Al final solamente quedan 4 archivos en src, que necesitamos para trabajar:
// App.css App.js index.css index.js
// Para iniciar un contenido de cero, borramos todo el header que trae por defecto y dejamos el div
// se crea la carpeta components
// dentro de esa, las dos List y ListRow
// Cada una tiene su js y su css

import './App.css';
import List from './components/List/List'; /*se impota donde se va a usar */

const FRUTAS = [
  {
    nome: "fresa",
    quantidade: 92,
    valor: 7,
    imagen: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800/public/2022-04/fresas%C2%A9iStock.jpg.webp?itok=Qr6qTdXj"
  },
  {
    nome: "piña",
    quantidade: 50,
    valor: 3,
    imagen: "https://okdiario.com/img/vida-sana/2015/02/beneficios-de-la-pina-en-la-dieta.jpg"
  },
  {
    nome: "mango",
    quantidade: 43,
    valor: 2,
    imagen: "https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800/public/2021-10/mango%C2%A9iStock.jpg.webp?itok=2kF_nLww"
  },
]
/*Dentro de esta función se está usando el componente List, también se les pede poner propiedades ej. fruta="morango*/
function App() {
  return (
    <div className="App">
      <List produtos={FRUTAS} /> 
      </div>
  );
}

export default App; /*nuestra nueva index es nuestro App*/
