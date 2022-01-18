import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import logo from '../../images/logo.svg';
import {useHistory} from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [Navbar,setNavbar] = useState(false);
  const history = useHistory()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const change = () => {
if (window.scrollY >= 80)
{
  setNavbar(true)
}
else{
  setNavbar(false)
}
  }
window.addEventListener('scroll',change);
  return (
    <>
      <IconContext.Provider value={{ color: '#559EED' }}>
        <Nav style={{ 'background' : Navbar?'whitesmoke': 'transparent' , boxShadow:Navbar?'5px 0px 5px whitesmoke': '10px 5px 5px transparent'}}>
          <NavbarContainer>
            <NavLogo to='/' onClick={()=> window.scrollTo(0, 0)
            }>
              <img src={logo} /> 
          
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks  onClick={async()=> {
                  await history.push('/')
                  await document.getElementById('first').scrollIntoView()}}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks  onClick={async()=> {
                   await history.push('/')
                 await document.getElementById('second').scrollIntoView()}}>
                 About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks onClick={async()=> {
                   await history.push('/')
                   document.getElementById('third').scrollIntoView()}}>
                 Info
                </NavLinks>
                </NavItem>
                <NavItem>
                <NavLinks to='/contact' >
                Contact
                </NavLinks>
              </NavItem>
                <NavItem>
                <NavLinks  onClick={async()=>{
                await history.push('/')
                await document.getElementById('dom').scrollIntoView()}}>
                 Domains
                </NavLinks>
              </NavItem>
                <NavItem>
                <NavLinks onClick={async()=> {
                   await history.push('/')
                  await document.getElementById('eng').scrollIntoView()}}>
                 Team
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/register'>
                    <Button primary>Register</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/register'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                     Register
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
