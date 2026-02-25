import logo from '../../assets/logo.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import { Container, RedesSociais } from './styles'

const Footer = () => (
  <Container>
    <img src={logo} alt="efood" />
    <RedesSociais>
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={twitter} alt="twitter" />
    </RedesSociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade 
      dos produtos é toda do estabelecimento contratado. 
    </p>
  </Container>
)

export default Footer