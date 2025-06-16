import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

interface TabButtonProps {
  $isActive: boolean;
}

const SectionApropos = styled.section`
  padding: 120px 5% 60px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 768px) {
    padding: 80px 5% 40px;
  }
`;

const Titre = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)<TabButtonProps>`
  padding: 12px 24px;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.background2};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.background : props.theme.colors.text};
  box-shadow: ${(props) =>
    !props.$isActive ? `0 4px 6px rgba(0, 0, 0, 0.1)` : "none"};
  transition: all 0.3s ease;
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    transform: translateY(-2px);
  }
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
`;

const Timeline = styled.div`
  position: relative;
  padding: 40px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    border-radius: 10px;
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
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

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
    right: -12px;
    width: 25px;
    height: 25px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    border: 4px solid ${(props) => props.theme.colors.cardBackground};
    z-index: 1;
  }

  &:nth-child(even)::before {
    left: -12px;
    right: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 25px;
    text-align: left !important;
    left: 0 !important;

    &:nth-child(odd)::before,
    &:nth-child(even)::before {
      left: 10px !important;
      right: auto !important;
    }
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.accent1};
  font-style: italic;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;
`;

const DateBadge = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background: ${(props) => props.theme.colors.secondary};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Apropos = () => {
  const [activeTab, setActiveTab] = useState("all");

  const parcours = [
    {
      type: "education",
      titre: "Baccalauréat en Informatique",
      sousTitre: "Université du Québec à Rimouski",
      date: "2023 - Actuel",
      description: "En cours, spécialisation développement web et mobile.",
    },
    {
      type: "education",
      titre: "Licence en Informatique (1 an)",
      sousTitre: "Université de Kinshasa",
      date: "2022",
      description: "Bases solides en programmation et algorithmes.",
    },
    {
      type: "work",
      titre: "Préposé d'aide à domicile",
      sousTitre: "Coup de Main à Domicile, Rimouski",
      date: "Janvier 2024 - Présent",
      description:
        "Accompagnement des clients dans leurs activités quotidiennes et maintien d'un environnement sécurisé.",
    },
    {
      type: "work",
      titre: "Développeur React Native",
      sousTitre: "Projet Personnel",
      date: "2024 - Présent",
      description:
        "Création d'une application mobile de gestion d'entraînement physique, avec suivi des répétitions et temps de repos, intégration de YouTube API.",
    },
    {
      type: "work",
      titre: "Développeur Front-end (React.js)",
      sousTitre: "Africell Kinshasa",
      date: "Janvier 2023 - Mai 2023",
      description:
        "Développement d'interfaces utilisateur pour une application web interne, optimisation des performances et collaboration avec l'équipe backend.",
    },
  ];

  const filteredParcours = activeTab === "all"
    ? parcours
    : parcours.filter(item => item.type === activeTab);

  return (
    <SectionApropos id="apropos">
      <Titre
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mon Parcours
      </Titre>

      <TabsContainer>
        <TabButton
          $isActive={activeTab === "all"}
          onClick={() => setActiveTab("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tout voir
        </TabButton>
        <TabButton
          $isActive={activeTab === "education"}
          onClick={() => setActiveTab("education")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Éducation
        </TabButton>
        <TabButton
          $isActive={activeTab === "work"}
          onClick={() => setActiveTab("work")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Expérience
        </TabButton>
      </TabsContainer>

      <TimelineContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Timeline>
          {filteredParcours.map((item, index) => (
            <Item
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <DateBadge>{item.date}</DateBadge>
              <ItemTitle>{item.titre}</ItemTitle>
              <SubTitle>{item.sousTitre}</SubTitle>
              <Description>{item.description}</Description>
            </Item>
          ))}
        </Timeline>
      </TimelineContainer>
    </SectionApropos>
  );
};

export default Apropos;