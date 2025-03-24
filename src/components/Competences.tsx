import styled from "styled-components";
import { motion } from "framer-motion";

const SectionCompetences = styled.section`
  padding: 120px 5% 60px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titre = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const CompetenceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const SkillImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 1.5rem;
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin-bottom: 1rem;
`;

const ProgressRing = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.05);
  stroke-width: 15;
`;

const CircleProgress = styled(motion.circle)`
  fill: none;
  stroke: ${(props) => props.theme.colors.secondary};
  stroke-width: 15;
  stroke-linecap: round;
`;

const PercentText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;

const SkillTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  color: ${(props) => props.theme.colors.accent1};
  text-align: center;
`;

const Competences = () => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  const skills = [
    { name: "HTML", icon: "/assets/skills/html.png", niveau: 95, description: "Création de structures solides et accessibles." },
    { name: "CSS", icon: "/assets/skills/css2.png", niveau: 90, description: "Animations et design responsif maîtrisés." },
    { name: "JavaScript", icon: "/assets/skills/javascript.png", niveau: 85, description: "Dynamisme et logique avancée au rendez-vous." },
    { name: "React Native", icon: "/assets/skills/react.png", niveau: 85, description: "Composants modernes et gestion avancée des états." },
    { name: "TypeScript", icon: "/assets/skills/Typescript.jpg", niveau: 80, description: "Code robuste et bien typé en progression constante." },
    { name: "React js", icon: "/assets/skills/react.png", niveau: 85, description: "Composants modernes et gestion avancée des états." },
    { name: "Python", icon: "/assets/skills/python.png", niveau: 80, description: "Automatisation et scripting efficaces." },
    { name: "MySQL", icon: "/assets/skills/mysql.png", niveau: 75, description: "Bases de données relationnelles bien gérées." },
    { name: "Google Cloud", icon: "/assets/skills/google.png", niveau: 70, description: "Déploiement cloud et intégration continue." },
  ];

  return (
    <SectionCompetences id="competences">
      <Titre>Mes compétences techniques</Titre>
      {skills.map((skill, index) => (
        <CompetenceCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SkillImage src={skill.icon} alt={skill.name} />
          <ProgressWrapper>
            <ProgressRing viewBox="0 0 160 160">
              <CircleBackground r={radius} cx="80" cy="80" />
              <CircleProgress
                r={radius}
                cx="80"
                cy="80"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - skill.niveau / 100)}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * (1 - skill.niveau / 100) }}
                transition={{ duration: 1.5 }}
              />
            </ProgressRing>
            <PercentText>{skill.niveau}%</PercentText>
          </ProgressWrapper>
          <SkillTitle>{skill.name}</SkillTitle>
          <SkillDescription>{skill.description}</SkillDescription>
        </CompetenceCard>
      ))}
    </SectionCompetences>
  );
};

export default Competences;
