import { Card, Titulo, Descricao, Botao } from './styles'

const Restaurante = ({ titulo, nota, categoria, descricao, capa }) => (
  <Card>
    <img src={capa} alt={titulo} />
    {/* Se quiser mostrar a categoria, use uma Tag aqui */}
    <div style={{ padding: '8px' }}>
      <Titulo>
        <span>{titulo}</span>
        <span>{nota} ★</span>
      </Titulo>
      <Descricao>{descricao}</Descricao>
      <Botao>Saiba mais</Botao>
    </div>
  </Card>
)

export default Restaurante