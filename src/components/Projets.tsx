import styled from "styled-components";
import { projets } from "../data/projets";
import { motion } from "framer-motion";

const SectionProjets = styled.section`
  padding: 100px 5%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Titre = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
`;

interface LigneProjetProps {
  $reverse?: boolean;
}


const LigneProjet = styled.div<LigneProjetProps>`
  display: flex;
  align-items: center;
  gap: 60px;
  flex-direction: ${(props) => (props.$reverse ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



const ImageBox = styled(motion.div)`
  flex: 1;

  img {
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 450px;
  border-radius: 12px;
  background-color: #000; // ou autre fond
}

`;

const TextBox = styled(motion.div)`
  flex: 1;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Projets = () => {
  return (
    <SectionProjets id="projets">
      <Titre>Mes Projets</Titre>
      {projets.map((projet, index) => (
        <LigneProjet key={projet.id} $reverse={index % 2 === 1}>

          <ImageBox
            initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={projet.image} alt={projet.titre} />
          </ImageBox>

          <TextBox
            initial={{ opacity: 0, x: index % 2 === 1 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>{projet.titre}</h3>
            <p>{projet.description}</p>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer">
              Découvrir le projet
            </a>
          </TextBox>
        </LigneProjet>
      ))}
    </SectionProjets>
  );
};

export default Projets;
