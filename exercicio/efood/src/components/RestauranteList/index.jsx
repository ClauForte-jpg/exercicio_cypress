import Restaurante from '../Restaurante'
import { Container } from './styles'

// Importe todas as 6 imagens que estão na sua pasta assets
import foto1 from '../../assets/image1.png'
import foto2 from '../../assets/image2.png'
import foto3 from '../../assets/image3.png'
import foto4 from '../../assets/image4.png'
import foto5 from '../../assets/image5.png'
import foto6 from '../../assets/image6.png'

const restaurantes = [
  { id: 1, titulo: 'Hiwaki', nota: '4.8', capa: foto1, descricao: 'Peça já o melhor da culinária japonesa...' },
  { id: 2, titulo: 'La Dolce Vita', nota: '4.6', capa: foto2, descricao: 'A autêntica massa italiana...' },
  { id: 3, titulo: 'Portu Sabor', nota: '4.7', capa: foto3, descricao: 'O melhor da culinária portuguesa...' },
  { id: 4, titulo: 'Fruit Sensation', nota: '4.9', capa: foto4, descricao: 'Doces e frutas frescas...' },
  { id: 5, titulo: 'Trattoria Enza', nota: '4.5', capa: foto5, descricao: 'Massas caseiras tradicionais...' },
  { id: 6, titulo: 'The Burger Place', nota: '4.8', capa: foto6, descricao: 'Hambúrgueres artesanais...' }
]

const RestauranteList = () => (
  <Container>
    {/* O .map vai percorrer os 6 itens e criar os 6 cards automaticamente */}
    {restaurantes.map((rest) => (
      <Restaurante 
        key={rest.id}
        titulo={rest.titulo}
        nota={rest.nota}
        descricao={rest.descricao}
        capa={rest.capa}
      />
    ))}
  </Container>
)

export default RestauranteList