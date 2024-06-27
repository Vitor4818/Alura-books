import './App.css';
import Logo from './componentes/logo'
import sacola from './imagens/sacola.svg'
import perfil from './imagens/perfil.svg'



const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante']
const icones = [perfil, sacola]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <ul className='opcoes'>
          {textoOpcoes.map( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>

        <ul className='icones'>
          {icones.map( (icone) => (
            <li><img src={icone} className='icone'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
