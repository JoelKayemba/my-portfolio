import styled from "styled-components";
import { motion } from "framer-motion";

const SectionApropos = styled.section`
  padding: 120px 5% 60px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const Titre = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
      transform: none;
    }
  }
`;

const Item = styled(motion.div)`
  position: relative;
  width: 50%;
  padding: 30px 40px;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    text-align: right;
  }
  &:nth-child(even) {
    left: 50%;
    text-align: left;
  }

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    right: -9px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.colors.background};
  }

  &:nth-child(even)::before {
    left: -9px;
    right: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    text-align: left;

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
    }

    &::before {
      left: 10px;
      right: auto;
    }
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const SubTitle = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.accent1};
  font-style: italic;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
`;

const Apropos = () => {
  const parcours = [
    {
      titre: "Baccalauréat en Informatique",
      sousTitre: "Université du Québec à Rimouski (2023 - Actuel)",
      description: "En cours, spécialisation développement web et mobile.",
    },
    {
      titre: "Licence en Informatique (1 an)",
      sousTitre: "Université de Kinshasa (2022 - 2022)",
      description: "Bases solides en programmation et algorithmes.",
    },
    {
      titre: "Préposé d’aide à domicile",
      sousTitre: "Coup de Main à Domicile, Rimouski | Janvier 2024 - Présent",
      description:
        "Accompagnement des clients dans leurs activités quotidiennes et maintien d’un environnement sécurisé.",
    },
    {
      titre: "Développeur React Native",
      sousTitre: "Projet Personnel | 2024 - Présent",
      description:
        "Création d’une application mobile de gestion d’entraînement physique, avec suivi des répétitions et temps de repos, intégration de YouTube API.",
    },
    {
      titre: "Développeur Front-end (React.js)",
      sousTitre: "Africell Kinshasa | Janvier 2023 - Mai 2023",
      description:
        "Développement d’interfaces utilisateur pour une application web interne, optimisation des performances et collaboration avec l’équipe backend.",
    },
  ];

  return (
    <SectionApropos id="apropos">
      <Titre>Mon Parcours</Titre>
      <Timeline>
        {parcours.map((item, index) => (
          <Item
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ItemTitle>{item.titre}</ItemTitle>
            <SubTitle>{item.sousTitre}</SubTitle>
            <Description>{item.description}</Description>
          </Item>
        ))}
      </Timeline>
    </SectionApropos>
  );
};

export default Apropos;