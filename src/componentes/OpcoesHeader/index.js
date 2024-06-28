import styled from 'styled-components';

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante']



function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao className="opcao">
          <p>{texto}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}
export default OpcoesHeader;
