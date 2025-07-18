import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";

const SectionCompetences = styled.section`
  padding: 120px 5%;
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
    top: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${(props) => props.theme.colors.accent1} 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 80px 5% 60px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

const Titre = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
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
  left: 50%;
  transform: translateX(-50%);

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
      ${(props) => props.theme.colors.accent1}
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
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

const CategoryContainer = styled.div`
  margin-bottom: 5rem;
`;

const CategoryHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const CategoryIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => props.$color},
    ${(props) => props.theme.colors.accent1}
  );
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      transparent
    );
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CompetencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CompetenceCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(${(props) => props.theme.colors.primaryRgb}, 0.03) 0%,
      transparent 100%
    );
    z-index: -1;
  }
`;

const ProgressWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  margin-bottom: 2rem;
`;

const ProgressRing = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const CircleBackground = styled.circle`
  fill: none;
  stroke: ${(props) => props.theme.colors.border};
  stroke-width: 10;
`;

const CircleProgress = styled(motion.circle)<{ $color: string }>`
  fill: none;
  stroke: ${(props) => props.$color};
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke 0.3s ease;
`;

const PercentText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.accent1}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SkillImage = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.background3};
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
  font-weight: 700;
`;

const SkillDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  font-size: 1rem;
  line-height: 1.7;
  margin-top: 1rem;
`;

const ExperienceLevel = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-style: italic;
  text-align: center;
`;

const Competences = () => {
  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  const categories = [
    {
      title: "Langages & Fondamentaux",
      icon: <FaCode />,
      color: "#4a6bff",
      skills: [
        { 
          name: "HTML5", 
          icon: "/assets/skills/html.png", 
          niveau: 95, 
          color: "#e34f26",
          description: "Maîtrise des balises sémantiques, accessibilité et SEO.", 
          experience: "2 ans d'expérience" 
        },
        { 
          name: "CSS3", 
          icon: "/assets/skills/css2.png", 
          niveau: 90, 
          color: "#264de4",
          description: "Animations, transitions, Flexbox/Grid et design responsive.", 
          experience: "2 ans d'expérience" 
        },
        { 
          name: "JavaScript", 
          icon: "/assets/skills/javascript.png", 
          niveau: 88, 
          color: "#f7df1e",
          description: "ES6+, async/await, design patterns et architectures modernes.", 
          experience: "2 ans d'expérience" 
        },
        { 
          name: "TypeScript", 
          icon: "/assets/skills/Typescript.jpg", 
          niveau: 80, 
          color: "#3178c6",
          description: "Typage statique pour des applications plus robustes et maintenables.", 
          experience: " 7 mois d'expérience" 
        },
      ]
    },
    {
      title: "Frameworks Frontend",
      icon: <FaCode />,
      color: "#8a2be2",
      skills: [
        { 
          name: "React", 
          icon: "/assets/skills/react.png", 
          niveau: 87, 
          color: "#61dafb",
          description: "Hooks, Context API, Redux, et optimisation des performances.", 
          experience: "1 ans d'expérience" 
        },
        { 
          name: "React Native", 
          icon: "/assets/skills/react.png", 
          niveau: 82, 
          color: "#61dafb",
          description: "Applications mobiles cross-platform avec expérience native.", 
          experience: "1 ans d'expérience" 
        },
       
      ]
    },
    {
      title: "Backend & Cloud",
      icon: <FaServer />,
      color: "#20b2aa",
      skills: [
        { 
          name: "Node.js", 
          icon: "/assets/skills/node-js.jpeg", 
          niveau: 78, 
          color: "#68a063",
          description: "API REST, Websockets et architectures microservices.", 
          experience: "1 ans d'expérience" 
        },
        { 
          name: "Google Cloud", 
          icon: "/assets/skills/google.png", 
          niveau: 70, 
          color: "#4285f4",
          description: "Déploiement, Cloud Functions et gestion des ressources.", 
          experience: "2 ans d'expérience" 
        },
        { 
          name: "Firebase", 
          icon: "/assets/skills/firebase.png", 
          niveau: 75, 
          color: "#ffca28",
          description: "Base de données temps réel, authentification et hosting.", 
          experience: "1 ans d'expérience" 
        },
      ]
    },
    {
      title: "Outils & Méthodologies",
      icon: <FaMobileAlt />,
      color: "#ff6b6b",
      skills: [
        { 
          name: "Git", 
          icon: "/assets/skills/git.png", 
          niveau: 85, 
          color: "#f05032",
          description: "Workflows collaboratifs (Git Flow), CI/CD et bonnes pratiques.", 
          experience: "2 ans d'expérience" 
        },
        { 
          name: "Docker", 
          icon: "/assets/skills/Docker.png", 
          niveau: 65, 
          color: "#2496ed",
          description: "Conteneurisation et déploiement d'applications.", 
          experience: "5 mois d'expérience" 
        },
        
      ]
    }
  ];

  return (
    <SectionCompetences id="competences">
      <ContentWrapper>
        <Titre
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mon Stack Technique
        </Titre>

        <SubTitre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Une expertise diversifiée acquise au fil de projets ambitieux et d'une passion constante pour l'innovation
        </SubTitre>

        {categories.map((category, catIndex) => (
          <CategoryContainer key={catIndex}>
            <CategoryHeader
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <CategoryIcon $color={category.color}>
                {category.icon}
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>

            <CompetencesGrid>
              {category.skills.map((skill, index) => (
                <CompetenceCard
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <SkillHeader>
                    <SkillImage>
                      <img src={skill.icon} alt={skill.name} />
                    </SkillImage>
                    <SkillTitle>{skill.name}</SkillTitle>
                  </SkillHeader>

                  <ProgressWrapper>
                    <ProgressRing viewBox="0 0 120 120">
                      <CircleBackground r={radius} cx="60" cy="60" />
                      <CircleProgress
                        r={radius}
                        cx="60"
                        cy="60"
                        $color={skill.color}
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
                  <ExperienceLevel>{skill.experience}</ExperienceLevel>
                </CompetenceCard>
              ))}
            </CompetencesGrid>
          </CategoryContainer>
        ))}
      </ContentWrapper>
    </SectionCompetences>
  );
};

export default Competences;