import styled from "styled-components";
import { motion } from "framer-motion";

const SectionCompetences = styled.section`
  padding: 120px 5%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 768px) {
    padding: 80px 5% 60px;
  }
`;

const Titre = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CompetencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CompetenceCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
`;

const ProgressRing = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: ${(props) => props.theme.colors.border};
  stroke-width: 8;
`;

const CircleProgress = styled(motion.circle)`
  fill: none;
  stroke: ${(props) => props.theme.colors.primary};
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke 0.3s ease;
`;

const PercentText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

const SkillDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 1rem;
`;


const Competences = () => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const skills = [
    { name: "HTML5", icon: "/assets/skills/html.png", niveau: 95, description: "Maîtrise avancée des balises sémantiques et accessibilité web." },
    { name: "CSS3", icon: "/assets/skills/css2.png", niveau: 90, description: "Animations, transitions et design responsive mobile-first." },
    { name: "JavaScript", icon: "/assets/skills/javascript.png", niveau: 85, description: "ES6+, manipulation du DOM, requêtes asynchrones." },
    { name: "React", icon: "/assets/skills/react.png", niveau: 85, description: "Hooks, Context API, gestion d'état avancée." },
    { name: "React Native", icon: "/assets/skills/react.png", niveau: 80, description: "Développement d'applications mobiles cross-platform." },
    { name: "TypeScript", icon: "/assets/skills/Typescript.jpg", niveau: 70, description: "Typage statique pour des applications plus robustes." },
    { name: "Python", icon: "/assets/skills/python.png", niveau: 75, description: "Scripting, automatisation et analyse de données." },
    { name: "C#", icon: "/assets/skills/csharp.png", niveau: 70, description: "Programmation orientée objet, applications desktop." },
    { name: "MySQL", icon: "/assets/skills/mysql.png", niveau: 75, description: "Modélisation et optimisation de bases de données." },
    { name: "Google Cloud", icon: "/assets/skills/google.png", niveau: 65, description: "Déploiement et services cloud de base." },
    { name: "Git", icon: "/assets/skills/git.png", niveau: 80, description: "Gestion de versions et workflows collaboratifs." },
    { name: "Styled Components", icon: "/assets/skills/react.png", niveau: 85, description: "CSS-in-JS pour des styles dynamiques et modulaires." },
  ];

  // Grouper les compétences par catégorie
  const categories = [
    {
      title: "Développement Frontend",
      skills: skills.filter(skill => 
        ["HTML5", "CSS3", "JavaScript", "React", "Styled Components"].includes(skill.name)
      )
    },
    {
      title: "Développement Mobile",
      skills: skills.filter(skill => 
        ["React Native"].includes(skill.name)
      )
    },
    {
      title: "Backend & Bases de données",
      skills: skills.filter(skill => 
        ["Python", "C#", "MySQL"].includes(skill.name)
      )
    },
    {
      title: "Outils & Technologies",
      skills: skills.filter(skill => 
        ["TypeScript", "Google Cloud", "Git"].includes(skill.name)
      )
    }
  ];

  return (
    <SectionCompetences id="competences">
      <Titre
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mes Compétences Techniques
      </Titre>

      {categories.map((category, catIndex) => (
        <div key={catIndex} style={{ marginBottom: '4rem' }}>
          <motion.h3 
            style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: '#555'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {category.title}
          </motion.h3>
          
          <CompetencesGrid>
            {category.skills.map((skill, index) => (
              <CompetenceCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillHeader>
                  <SkillImage src={skill.icon} alt={skill.name} />
                  <SkillTitle>{skill.name}</SkillTitle>
                </SkillHeader>

                <ProgressWrapper>
                  <ProgressRing viewBox="0 0 120 120">
                    <CircleBackground r={radius} cx="60" cy="60" />
                    <CircleProgress
                      r={radius}
                      cx="60"
                      cy="60"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - skill.niveau / 100)}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: circumference * (1 - skill.niveau / 100) }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </ProgressRing>
                  <PercentText>{skill.niveau}%</PercentText>
                </ProgressWrapper>

                <SkillDescription>{skill.description}</SkillDescription>
              </CompetenceCard>
            ))}
          </CompetencesGrid>
        </div>
      ))}
    </SectionCompetences>
  );
};

export default Competences;