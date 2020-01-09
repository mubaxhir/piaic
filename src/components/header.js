import headerStyles from "./header.module.scss"
import {Link} from 'gatsby'
import Logo from "./piaic.svg"
import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Icon,
} from "reactstrap"

const Header = props => {


  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)


  return (
    <div className={headerStyles.header}>
      
      
        
      <Navbar className={headerStyles.headermain}>
      <NavbarBrand href="/">
          <img src={Logo} className={headerStyles.image} />
        </NavbarBrand>  
      <div><Link to ="./"/></div>

        <div className={headerStyles.maindiv}>
        <Collapse isOpen={isOpen} navbar className={headerStyles.navbarcollaps}>

          <Nav navbar>
            <NavItem>

              <NavLink className={headerStyles.links} id={headerStyles.how_works}>
                <Link to="./howItsWork" className={headerStyles.pages}  >
                How it works
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={headerStyles.links}>
              <a href="https://portal.piaic.org/signup" className={headerStyles.pages}>
              Apply
                </a>  
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                Available programs
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown}>
                <DropdownItem className={headerStyles.options}> <Link to="./artificial_intelligence" className={headerStyles.pages}>Artificial inteligence</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./cloud_native" className={headerStyles.pages}>Cloud Native and Mobile Web</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./blockchain" className={headerStyles.pages}>Blockchain</Link> </DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./iot" className={headerStyles.pages}>Internet Of Things</Link> </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={headerStyles.links}>
                About
              </DropdownToggle>
              <DropdownMenu right className={headerStyles.dropdown} id = "abouts">
                <DropdownItem className={headerStyles.options}><Link to="./about" className={headerStyles.pages}>The President</Link></DropdownItem>
                <DropdownItem className={headerStyles.options}><Link to="./managementComittee" className={headerStyles.pages}>Management Committie</Link></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink className={headerStyles.links}>
                <Link to="./wit" className={headerStyles.pages}>WIT</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        <NavbarToggler onClick={toggle} className={headerStyles.toogle} />

      </Navbar>
    </div>
  )
}

export default Header
