import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterWrapper = styled.div`
  margin-top: 80px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const FooterContainer = styled.footer`
  padding: 40px 5%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  a {
    color: white;
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transform: scale(1.2);
    }
  }
`;

const CopyRight = styled.p`
  font-size: 1rem;
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <TopBar />
      <FooterContainer>
        <SocialIcons>
          <a
            href="https://github.com/JoelKayemba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-kayemba-1a7794294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:kayembajoel92@gmail.com">
            <FaEnvelope />
          </a>
        </SocialIcons>
        <CopyRight>
          © {new Date().getFullYear()} Joel Kayemba. Tous droits réservés.
        </CopyRight>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
