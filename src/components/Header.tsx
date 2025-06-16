import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

// Types
interface MobileMenuProps {
  $isOpen: boolean;
}

// Styled Components
const HeaderContainer = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: ${({ theme, $scrolled }) =>
    $scrolled ? `${theme.colors.background}e6` : theme.colors.background};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  transition: all 0.3s ease;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent1};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  z-index: 1002;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavLinks = styled(motion.div)<MobileMenuProps>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    width: 75%;
    max-width: 300px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 1003;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.75rem 0;
  }
`;

const CTAButton = styled(motion.a)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const MenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1002;
  padding: 0.5rem;

  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "apropos", label: "À propos" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      $scrolled={scrolled}
    >
      <Logo href="#accueil" onClick={() => setMenuOpen(false)}>
        <span>J</span>oel Kayemba
      </Logo>

      <MenuButton
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <NavLinks $isOpen={menuOpen}>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
            whileHover={{ scale: 1.05 }}
          >
            {item.label}
          </NavItem>
        ))}

        <CTAButton
          href="/curriculum_vitae-joel-kayemba.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> CV
        </CTAButton>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
