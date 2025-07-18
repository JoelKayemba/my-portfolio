import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaUserTie } from "react-icons/fa";

interface TabButtonProps {
  $isActive: boolean;
}

const SectionApropos = styled.section`
  padding: 120px 5% 60px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.background} 0%,
    ${(props) => props.theme.colors.background2} 100%
  );
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.accent1} 0%,
      transparent 70%
    );
    opacity: 0.15;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 5% 40px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

const Titre = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.accent1}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  left: 0%;
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.accent1}
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitre = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${(props) => props.theme.colors.primary},
      transparent
    );
  }
`;

const TabButton = styled(motion.button)<TabButtonProps>`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) =>
    props.$isActive
      ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.accent1})`
      : props.theme.colors.background3};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.background : props.theme.colors.text};
  box-shadow: ${(props) =>
    props.$isActive
      ? `0 4px 15px rgba(${props.theme.colors.primaryRgb}, 0.4)`
      : `0 2px 10px rgba(0, 0, 0, 0.1)`};
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  gap: 10px;
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
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    z-index: -1;
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.$isActive
        ? `0 6px 20px rgba(${props.theme.colors.primaryRgb}, 0.5)`
        : `0 4px 15px rgba(0, 0, 0, 0.15)`};
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    font-size: 1.2em;
  }
`;

const TimelineContainer = styled(motion.div)`
  position: relative;
  max-width: 1200px;
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
      ${(props) => props.theme.colors.accent1}
    );
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(${(props) => props.theme.colors.primaryRgb}, 0.3);
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
      transform: none;
    }
  }
`;

const Item = styled(motion.div)`
  position: relative;
  width: calc(50% - 40px);
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 40px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border-left: 4px solid ${(props) => props.theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(odd) {
    left: 0;
    text-align: left;
    border-left: none;
    border-right: 4px solid ${(props) => props.theme.colors.accent1};
  }

  &:nth-child(even) {
    left: calc(50% + 40px);
    text-align: left;
  }

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    right: -16px;
    width: 30px;
    height: 30px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme.colors.cardBackground};
    z-index: 1;
    box-shadow: 0 0 0 4px rgba(${(props) => props.theme.colors.primaryRgb}, 0.2);
  }

  &:nth-child(even)::before {
    left: -16px;
    right: auto;
    background: ${(props) => props.theme.colors.accent1};
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    padding: 25px;
    text-align: left !important;
    left: 60px !important;
    margin-bottom: 30px;

    &:nth-child(even) {
      left: 60px !important;
    }

    &:nth-child(odd)::before,
    &:nth-child(even)::before {
      left: -16px !important;
      right: auto !important;
    }
  }
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div<{ $type: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) =>
    props.$type === "education"
      ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.accent1})`
      : `linear-gradient(135deg, ${props.theme.colors.secondary}, ${props.theme.colors.accent2})`};
  color: white;
  margin-right: 20px;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 1.3rem;
  }
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.3;
`;

const SubTitle = styled.p`
  margin: 0.5rem 0;
  color: ${(props) => props.theme.colors.accent1};
  font-weight: 600;
  font-size: 1.1rem;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 15px;
`;

const DateBadge = styled.span`
  display: inline-block;
  padding: 6px 15px;
  background: ${(props) => props.theme.colors.background3};
  color: ${(props) => props.theme.colors.text};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 15px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const SkillBadge = styled.span`
  padding: 5px 12px;
  background: rgba(${(props) => props.theme.colors.primaryRgb}, 0.1);
  color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(${(props) => props.theme.colors.primaryRgb}, 0.2);
`;

const Apropos = () => {
  const [activeTab, setActiveTab] = useState<"all" | "education" | "work">("all");

  const parcours = [
    {
      type: "education",
      titre: "Baccalauréat en Informatique",
      sousTitre: "Université du Québec à Rimouski",
      date: "2023 - Actuel",
      description:
        "Formation approfondie en développement web et mobile, algorithmique avancée et gestion de projets informatiques. Acquisition de compétences en React, Node.js, bases de données et sécurité informatique.",
      skills: ["React", "Node.js", "MongoDB", "Algorithmique", "UI/UX"],
      icon: <FaGraduationCap />,
    },
    {
      type: "education",
      titre: "Licence en Informatique (1 an)",
      sousTitre: "Université de Kinshasa",
      date: "2022",
      description:
        "Initiation aux fondamentaux de la programmation, structures de données et architectures informatiques. Projets pratiques en Java et C++.",
      skills: ["Java", "C++", "Structures de données", "POO"],
      icon: <FaGraduationCap />,
    },
    {
      type: "work",
      titre: "Préposé d'aide à domicile",
      sousTitre: "Coup de Main à Domicile, Rimouski",
      date: "Janvier 2024 - Présent",
      description:
        "Accompagnement personnalisé pour clients en perte d'autonomie. Développement de compétences relationnelles, gestion des urgences et adaptation à divers besoins spécifiques.",
      skills: ["Relation client", "Gestion de crise", "Empathie", "Adaptabilité"],
      icon: <FaUserTie />,
    },
    {
      type: "work",
      titre: "Développeur React Native",
      sousTitre: "Projet Personnel",
      date: "2024 - Présent",
      description:
        "Conception et développement d'une application mobile complète de gestion d'entraînement physique avec suivi des performances, intégration d'API YouTube pour tutoriels, et synchronisation cloud.",
      skills: ["React Native", "Firebase", "YouTube API", "State Management"],
      icon: <FaCode />,
    },
    {
      type: "work",
      titre: "Développeur Front-end (React.js)",
      sousTitre: "Africell Kinshasa",
      date: "Janvier 2023 - Mai 2023",
      description:
        "Refonte de l'interface utilisateur d'une application web interne, optimisation des performances (réduction du temps de chargement de 40%), et collaboration étroite avec l'équipe back-end pour l'intégration d'API.",
      skills: ["React.js", "Redux", "API REST", "Optimisation", "Agile"],
      icon: <FaBriefcase />,
    },
  ];

  const filteredParcours =
    activeTab === "all"
      ? parcours
      : parcours.filter((item) => item.type === activeTab);

  return (
    <SectionApropos id="apropos">
      <ContentWrapper>
        <Titre
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mon Parcours Professionnel
        </Titre>

        <SubTitre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Une combinaison unique d'expériences académiques et professionnelles qui
          forgent ma vision du développement et ma passion pour la technologie.
        </SubTitre>

        <TabsContainer>
          <TabButton
            $isActive={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase /> Tout voir
          </TabButton>
          <TabButton
            $isActive={activeTab === "education"}
            onClick={() => setActiveTab("education")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap /> Formation
          </TabButton>
          <TabButton
            $isActive={activeTab === "work"}
            onClick={() => setActiveTab("work")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserTie /> Expérience
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <ItemHeader>
                  <IconWrapper $type={item.type}>{item.icon}</IconWrapper>
                  <ItemContent>
                    <DateBadge>{item.date}</DateBadge>
                    <ItemTitle>{item.titre}</ItemTitle>
                    <SubTitle>{item.sousTitre}</SubTitle>
                  </ItemContent>
                </ItemHeader>
                <Description>{item.description}</Description>
                {item.skills && (
                  <SkillsContainer>
                    {item.skills.map((skill, i) => (
                      <SkillBadge key={i}>{skill}</SkillBadge>
                    ))}
                  </SkillsContainer>
                )}
              </Item>
            ))}
          </Timeline>
        </TimelineContainer>
      </ContentWrapper>
    </SectionApropos>
  );
};

export default Apropos;