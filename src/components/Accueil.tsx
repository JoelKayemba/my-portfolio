import styled, { keyframes } from "styled-components";
import photo from "/assets/maPhoto.jpg"; 
import { motion } from "framer-motion";

// Animations améliorées
const rotate = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.7; }
  70% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(0.95); opacity: 0.7; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Section principale
const SectionAccueil = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 5% 60px;
  min-height: 100vh;
  background: linear-gradient(-45deg, 
    ${(props) => props.theme.colors.background}, 
    ${(props) => props.theme.colors.background2},
    ${(props) => props.theme.colors.primary});
  background-size: 400% 400%;
  animation: ${gradientShift} 12s ease infinite;
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 100px 5% 40px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    z-index: 0;
  }
`;

const TexteAccueil = styled(motion.div)`
  max-width: 600px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Intro = styled(motion.p)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Nom = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.text},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text}dd;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const DownloadButton = styled(motion.a)`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.accent2}
  );
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
      ${(props) => props.theme.colors.accent2},
      ${(props) => props.theme.colors.secondary}
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: clamp(300px, 30vw, 400px);
  height: clamp(300px, 30vw, 400px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    margin-top: 4rem;
    width: 280px;
    height: 280px;
  }

  img {
    position: relative;
    width: 90%;
    height: 90%;
    object-fit: cover;
    z-index: 3;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    border: 8px solid ${(props) => props.theme.colors.secondary}88;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    filter: grayscale(20%) contrast(110%);

    &:hover {
      border-radius: 50%;
      filter: grayscale(0%) contrast(100%);
    }
  }
`;

const AnimatedCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    ${(props) => props.theme.colors.secondary}22,
    transparent 70%
  );
  animation: ${rotate} 18s linear infinite;
  z-index: 1;
`;

const PulseRing = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  border: 3px solid ${(props) => props.theme.colors.secondary}55;
  border-radius: 50%;
  animation: ${pulse} 3s infinite ease-in-out;
  z-index: 0;
`;

const TechBadge = styled(motion.div)`
  position: absolute;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 4;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  &:nth-child(1) {
    top: -10%;
    left: 10%;
  }
  &:nth-child(2) {
    bottom: 15%;
    right: -10%;
  }
  &:nth-child(3) {
    bottom: -10%;
    left: 20%;
  }
`;

const Accueil = () => {
  const techItems = ["React", "Node.js", "Javascript"];
  
  return (
    <SectionAccueil id="accueil">
      <TexteAccueil
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Intro
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Bonjour, je suis
        </Intro>
        <Nom
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Kayemba Joel
        </Nom>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
           Étudiant en informatique à l’Université du Québec à Rimouski, je suis passionné par la création de
 solutions numériques modernes, utiles et accessibles. Mais au-delà de la technologie, ce qui m’anime, c’est
 l’envie de comprendre, de m’adapter, et de contribuer à des projets humains, qu’ils soient techniques, créatifs
 ou organisationnels. J’aime apprendre, m’engager, et relever des défis, quel que soit le domaine
        </Description>
        <DownloadButton
          href="/curriculum_vitae-joel-kayemba.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Télécharger mon CV
        </DownloadButton>
      </TexteAccueil>

      <ImageContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatedCircle />
        <PulseRing />
        <img src={photo} alt="Kayemba Joel" />
        
        {techItems.map((tech, index) => (
          <TechBadge
            key={tech}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 1.2 + index * 0.2,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </TechBadge>
        ))}
      </ImageContainer>
    </SectionAccueil>
  );
};

export default Accueil;