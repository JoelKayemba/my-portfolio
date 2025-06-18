import styled from "styled-components";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaLinkedin, FaGithub} from "react-icons/fa";
import { MdEmail, MdLocationOn} from "react-icons/md";

const SectionContact = styled.section`
  padding: 120px 5% 80px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Titre = styled(motion.h2)`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 2px;
  }
`;

const Description = styled(motion.p)`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.3rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.text};
  }

  p, a {
    color: ${(props) => props.theme.colors.textSecondary};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Formulaire = styled(motion.form)`
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled(motion.div)`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px ${(props) => props.theme.colors.primary}30;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px ${(props) => props.theme.colors.primary}40;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const Notification = styled(motion.div)`
  padding: 15px 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SuccessNotification = styled(Notification)`
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.3);
`;

const ErrorNotification = styled(Notification)`
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
  border: 1px solid rgba(244, 67, 54, 0.3);
`;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    emailjs
      .sendForm(
        "service_ykjyo48",
        "template_l6bdlnj",
        e.currentTarget,
        "qx6185chBot3JYsgb"
      )
      .then(() => {
        setNotification({ type: "success", message: "Message envoyé avec succès !" });
        formRef.current?.reset();
      })
      .catch(() => {
        setNotification({ type: "error", message: "Erreur lors de l'envoi. Veuillez réessayer." });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setNotification(null), 5000);
      });
  };

  return (
    <SectionContact id="contact">
      <Container>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Titre
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contactez-moi
          </Titre>
          
          <Description
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.
          </Description>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <MdEmail />
            </InfoIcon>
            <InfoContent>
              <h3>Email</h3>
              <a href="mailto:kayembajoel92@gmail.com">kayembajoel92@gmail.com</a>
            </InfoContent>
          </InfoItem>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
          
            
          </InfoItem>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <InfoIcon>
              <MdLocationOn />
            </InfoIcon>
            <InfoContent>
              <h3>Localisation</h3>
              <p>Rimouski, Québec, Canada</p>
            </InfoContent>
          </InfoItem>

          <SocialLinks
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <SocialLink
              href="https://www.linkedin.com/in/joel-kayemba-1a7794294/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/joelkayemba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            
         
          </SocialLinks>
        </ContactInfo>

        <Formulaire
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <InputGroup
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Input
              name="user_name"
              type="text"
              placeholder="Votre nom complet"
              required
            />
          </InputGroup>

          <InputGroup
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Input
              name="user_email"
              type="email"
              placeholder="Votre adresse email"
              required
            />
          </InputGroup>

          <InputGroup
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Textarea
              name="message"
              placeholder="Votre message..."
              required
            />
          </InputGroup>

          <SubmitButton
            type="submit"
            disabled={loading}
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
          >
            {loading ? (
              "Envoi en cours..."
            ) : (
              <>
                <FaPaperPlane /> Envoyer le message
              </>
            )}
          </SubmitButton>

          {notification && (
            notification.type === "success" ? (
              <SuccessNotification
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FaCheck /> {notification.message}
              </SuccessNotification>
            ) : (
              <ErrorNotification
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {notification.message}
              </ErrorNotification>
            )
          )}
        </Formulaire>
      </Container>
    </SectionContact>
  );
};

export default Contact;