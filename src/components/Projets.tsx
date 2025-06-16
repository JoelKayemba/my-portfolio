import styled from "styled-components";
import { projets } from "../data/projets";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt } from "react-icons/fa";

const SectionProjets = styled.section`
  padding: 120px 5%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const Titre = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 80px;
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
      ${(props) => props.theme.colors.secondary}
    );
    border-radius: 3px;
  }

   @media (max-width: 768px) {
    font-size:3rem;
    left:0%;

  }
`;

const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 120px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 80px;
  }
`;

const ProjectImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
`;

const ProjectContent = styled(motion.div)`
  flex: 1;
  padding: 30px;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) => props.theme.colors.secondary};
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ProjectTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;
`;

const TechBadge = styled.span`
  background: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.text};
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background: ${(props) => props.theme.colors.primary};
  color: white;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const ProjectTypeBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
  font-size: 0.9rem;
`;

const ProjectNumber = styled.div`
  position: absolute;
  font-size: 6rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary}15;
  z-index: 0;
  user-select: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Projets = () => {
 // const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <SectionProjets id="projets">
      <Titre
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Réalisations
      </Titre>

      <ProjectsContainer>
        {projets.map((projet, index) => (
          <ProjectCard
            key={projet.id}
           // onMouseEnter={() => setHoveredProject(index)}
            //onMouseLeave={() => setHoveredProject(null)}
          >
            <ProjectNumber
              style={{
                right: index % 2 === 0 ? "5%" : "auto",
                left: index % 2 === 1 ? "5%" : "auto",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </ProjectNumber>

            {index % 2 === 0 ? (
              <>
                <ProjectImageContainer
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProjectTypeBadge>
                    {projet.type === "web" ? <FaCode /> : <FaMobileAlt />}
                    {projet.type === "web" ? "Application Web" : "Application Mobile"}
                  </ProjectTypeBadge>
                  <ProjectImage src={projet.image} alt={projet.titre} />
                </ProjectImageContainer>

                <ProjectContent
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProjectTitle>{projet.titre}</ProjectTitle>
                  <ProjectDescription>{projet.description}</ProjectDescription>
                  
                  <ProjectTechList>
                    {projet.technologies.map((tech, i) => (
                      <TechBadge key={i}>{tech}</TechBadge>
                    ))}
                  </ProjectTechList>

                  <ProjectLinks>
                    <ProjectLink
                      href={projet.lienDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Voir le projet
                    </ProjectLink>
                    {projet.lienCode && (
                      <ProjectLink
                        href={projet.lienCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: "#333", color: "white" }}
                      >
                        <FaGithub /> Code source
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </>
            ) : (
              <>
                <ProjectContent
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProjectTitle>{projet.titre}</ProjectTitle>
                  <ProjectDescription>{projet.description}</ProjectDescription>
                  
                  <ProjectTechList>
                    {projet.technologies.map((tech, i) => (
                      <TechBadge key={i}>{tech}</TechBadge>
                    ))}
                  </ProjectTechList>

                  <ProjectLinks>
                    <ProjectLink
                      href={projet.lienDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt /> Voir le projet
                    </ProjectLink>
                    {projet.lienCode && (
                      <ProjectLink
                        href={projet.lienCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ background: "#333", color: "white" }}
                      >
                        <FaGithub /> Code source
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>

                <ProjectImageContainer
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <ProjectTypeBadge>
                    {projet.type === "web" ? <FaCode /> : <FaMobileAlt />}
                    {projet.type === "web" ? "Application Web" : "Application Mobile"}
                  </ProjectTypeBadge>
                  <ProjectImage src={projet.image} alt={projet.titre} />
                </ProjectImageContainer>
              </>
            )}
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </SectionProjets>
  );
};

export default Projets;