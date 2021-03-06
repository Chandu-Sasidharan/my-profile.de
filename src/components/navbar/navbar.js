import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Navigation, NavLogo, NavItem, MobileIcon } from './navbarStyles';
import useScrollOffset from '../../utils/useScrollOffset';

const Navbar = ({ toggleSidebar }) => {
  const [iftransparent, setifTransparent] = useState(true);
  const offset = useScrollOffset();

  const goToHome = () => {
    scroll.scrollToTop();
  };

  const Scrolling = () => {
    if (window.pageYOffset > 50) {
      setifTransparent(false);
    } else {
      setifTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', Scrolling);

    return () => {
      window.removeEventListener('scroll', Scrolling);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Navigation id="navigation" $iftransparent={iftransparent}>
          <NavLogo onClick={goToHome} to="/">
            Home
          </NavLogo>
          <NavItem
            $iftransparent={iftransparent}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={offset}
          >
            About
          </NavItem>
          <NavItem
            $iftransparent={iftransparent}
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            offset={offset}
          >
            Portfolio
          </NavItem>
          <NavItem
            $iftransparent={iftransparent}
            to="canvas"
            smooth={true}
            duration={500}
            spy={true}
            offset={offset}
          >
            Canvas
          </NavItem>
          <NavItem
            $iftransparent={iftransparent}
            to="blog"
            smooth={true}
            duration={500}
            spy={true}
            offset={offset}
          >
            Blog
          </NavItem>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
        </Navigation>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
