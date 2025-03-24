import styled from "styled-components";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const HeaderContainer = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: transform 0.4s ease;
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-100%)')};
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 250px;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background2};
    flex-direction: column;
    justify-content: center;
    transition: right 0.4s ease;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const ThemeToggle = styled.button`
  background: ${(props) => props.theme.colors.accent1};
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    color: #fff;
  }
`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

type HeaderProps = {
  toggleTheme: () => void;
  darkMode: boolean;
};

const Header = ({ toggleTheme, darkMode }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScroll || currentScroll < 50);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer visible={visible}>
      <Logo>Joel Kayemba</Logo>
      <MenuIcon onClick={() => setMenuOpen(true)}>
        <FaBars />
      </MenuIcon>
      <Nav open={menuOpen}>
        {menuOpen && (
          <CloseButton onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </CloseButton>
        )}
        <NavLink href="#accueil" onClick={() => setMenuOpen(false)}>
          Accueil
        </NavLink>
        <NavLink href="#apropos" onClick={() => setMenuOpen(false)}>
          À propos
        </NavLink>
        <NavLink href="#projets" onClick={() => setMenuOpen(false)}>
          Projets
        </NavLink>
        <NavLink href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;