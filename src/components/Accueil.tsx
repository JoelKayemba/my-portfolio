import styled, { keyframes } from "styled-components";
import photo from "/assets/maPhoto.jpg"; 
import { motion } from "framer-motion";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.2); opacity: 1; }
`;

const SectionAccueil = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 5% 60px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 100px 5% 40px;
  }
`;

const TexteAccueil = styled(motion.div)`
  max-width: 600px;
`;

const Intro = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Nom = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: gray;
  margin-bottom: 2rem;
`;

const DownloadButton = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  img {
    position: relative;
    width: 350px;
    z-index: 3;
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme.colors.secondary};
  }
`;

const AnimatedCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle at center, ${(props) => props.theme.colors.secondary}66, transparent 70%);
  animation: ${rotate} 15s linear infinite;
  z-index: 1;
`;

const PulseRing = styled.div`
  position: absolute;
  width: 120%;
  height: 120%;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  animation: ${pulse} 2.5s infinite ease-in-out;
  z-index: 0;
`;

const Accueil = () => {
  return (
    <SectionAccueil id="accueil">
      <TexteAccueil
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Intro>Bonjour, je suis</Intro>
        <Nom>Kayemba Joel</Nom>
        <Description>
        Étudiant en informatique à l’Université du Québec à Rimouski, passionné par le développement web et mobile. Curieux, motivé et toujours prêt à apprendre, j’aime concevoir des applications modernes, fonctionnelles et esthétiques. Actuellement à la recherche d’un stage pour mettre mes compétences en pratique, découvrir de nouveaux environnements de travail et contribuer à des projets ambitieux.
        </Description>
        <DownloadButton href="/curriculum_vitae-joel-kayemba.pdf" download>
          Télécharger mon CV
        </DownloadButton>
      </TexteAccueil>
      <ImageContainer>
        <AnimatedCircle />
        <PulseRing />
        <img src={photo} alt="Kayemba Joel" />
      </ImageContainer>
    </SectionAccueil>
  );
};

export default Accueil;  