import styled from "styled-components";
import { projets } from "../data/projets";
import { motion } from "framer-motion";

const SectionProjets = styled.section`
  padding: 120px 5% 80px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titre = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  text-align: center;
  color: gray;
  margin-bottom: 4rem;
  font-size: 1.25rem;
`;

const GrilleProjets = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  width: 100%;
`;

const CarteProjet = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s, box-shadow 0.4s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  ${CarteProjet}:hover & {
    opacity: 1;
  }
`;

const TitreProjet = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const DescProjet = styled.p`
  font-size: 1.1rem;
  color: #f0f0f0;
  margin-bottom: 1rem;
`;

const LienProjet = styled.a`
  align-self: flex-start;
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Projets = () => {
  return (
    <SectionProjets id="projets">
      <Titre>Mes Projets</Titre>
      <Description>
        Voici quelques réalisations marquées par l'innovation et la qualité.
      </Description>
      <GrilleProjets>
        {projets.map((projet) => (
          <CarteProjet
            key={projet.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={projet.image} alt={projet.titre} />
            <Overlay>
              <TitreProjet>{projet.titre}</TitreProjet>
              <DescProjet>{projet.description}</DescProjet>
              <LienProjet href={projet.lien} target="_blank" rel="noreferrer">
                Découvrir le projet
              </LienProjet>
            </Overlay>
          </CarteProjet>
        ))}
      </GrilleProjets>
    </SectionProjets>
  );
};

export default Projets; 