import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Animations
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;


// Section principale
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.background} 0%, 
    ${props => props.theme.colors.background2} 50%, 
    ${props => props.theme.colors.primary} 100%);
  background-size: 300% 300%;
  animation: ${gradientFlow} 12s ease infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 30%, transparent 0%, rgba(0,0,0,0.1) 100%);
    z-index: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 900px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Greeting = styled(motion.p)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const NameTitle = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.text},
    ${props => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${props => props.theme.colors.secondary};
    border-radius: 2px;
  }
`;

const ProfessionalStatement = styled(motion.div)`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.accent2}
  );
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${props => props.theme.colors.accent2},
      ${props => props.theme.colors.secondary}
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Accueil = () => {
  return (
    <HeroSection id="accueil">
      <ContentWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Bonjour, je suis
        </Greeting>

        <NameTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Kayemba Joel
        </NameTitle>

        <ProfessionalStatement
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Étudiant en <Highlight>informatique</Highlight> à l'Université du Québec à Rimouski, je crée des solutions numériques <Highlight>modernes</Highlight> et <Highlight>accessibles</Highlight>. Passionné par l'innovation et l'<Highlight>adaptabilité</Highlight>, je m'épanouis dans des environnements qui allient <Highlight>technique</Highlight> et <Highlight>dimension humaine</Highlight>.
        </ProfessionalStatement>

        <CTAButton
          href="/curriculum_vitae-joel-kayemba.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Télécharger mon CV
        </CTAButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Accueil;