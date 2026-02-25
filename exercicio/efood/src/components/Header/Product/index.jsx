import { Card, Titulo, Descricao, Tag, Infos, Rating } from './styles'
import estrela from '../../assets/estrela.svg' // Exporte a estrelinha do Figma

const Product = ({ image, title, category, rating, description }) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      <Tag>{category}</Tag>
    </Infos>
    <div style={{ padding: '8px' }}>
      <Titulo>
        {title}
        <Rating>
          {rating} <img src={estrela} alt="estrela" />
        </Rating>
      </Titulo>
      <Descricao>{description}</Descricao>
      <button style={{ background: '#E66767', color: '#FFEBD9', border: 'none', padding: '4px 6px', cursor: 'pointer' }}>
        Saiba mais
      </button>
    </div>
  </Card>
)

export default Product