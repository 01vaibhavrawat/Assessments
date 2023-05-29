import {useState} from 'react'
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,} from 'reactstrap';


const NavCom = (args) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

      return (
          <Navbar id="navbar" expand="md" variant="light">
            <NavbarBrand id="logo" href="https://www.healgratefully.com">HealGratefully</NavbarBrand>
            <NavbarToggler id="toggler" onClick={toggle}>
              <img id="nav-icon" src={require('../images/menu.png')} alt=":::"/>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/ContactUs">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/login">Sign in</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      );
    }
  export default NavCom