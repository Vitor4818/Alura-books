import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    width: 20%;
`

const LogoImg = styled.img`
    margin-right: 5%;
`


function Logo(){
 return(
    <LogoContainer>
      <LogoImg src={logo} alt='logo' className='logo-img'></LogoImg>
      <p><strong>Alura</strong>-Books</p>
    </LogoContainer>
 )   
}
export default Logo