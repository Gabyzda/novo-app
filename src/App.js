import './App.css';
import List from './components/List/List';

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

function App() {
  return (
    <div className="App">
      <List produtos={FRUTAS} />
    </div>
  );
}

export default App;
