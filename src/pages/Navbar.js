import {useState} from 'react'
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem, } from 'reactstrap';


const NavCom = (args) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

      return (
          <Navbar id="navbar" expand="md" variant="light">
            <NavbarBrand id="logo"><NavLink href="https://www.cruelme.com/">CruelMe.com</NavLink></NavbarBrand>
            <NavbarToggler id="toggler" onClick={toggle}><img id="nav-icon" src={require('../images/menu.png')} /></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/login">Sign In</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      );
    }
  export default NavCom