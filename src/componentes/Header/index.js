import './estilo.css'
import Logo from "../logo"
import OpcoesHeader from "../OpcoesHeader"
import IconesHeader from "../IconesHeader"

function Header(){
    return(
        <div className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </div>
    )
}


export default Header