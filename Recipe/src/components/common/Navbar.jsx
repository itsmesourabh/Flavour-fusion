import {Menu} from 'semantic-ui-react'
import  {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Menu  borderless >
      <Menu.Item name='Home' as={Link} to='/'/>
      <Menu.Item name='Recipes'  as={Link} to='/recipes'/>
    </Menu>
  )
}

export default Navbar
