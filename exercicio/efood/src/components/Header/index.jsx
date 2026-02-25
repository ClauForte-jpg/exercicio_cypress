import logo from '../../assets/logo.svg'
import { HeaderBar, Titulo } from './styles'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="efood" />
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
  </HeaderBar>
)

export default Header