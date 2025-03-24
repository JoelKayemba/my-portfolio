import styled from "styled-components";
import { useState , useRef} from "react";
import emailjs from "emailjs-com";

const SectionContact = styled.section`
  padding: 120px 5% 60px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const Titre = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  text-align: center;
  color: gray;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const Formulaire = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Notification = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
`;

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const formRef = useRef<HTMLFormElement>(null); // on crée une référence vers le formulaire
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .sendForm(
          "service_ykjyo48",   
          "template_l6bdlnj",  
          e.currentTarget,     
          "qx6185chBot3JYsgb"  
        )
        .then((response) => {
          console.log("Message envoyé !", response.status, response.text);
          setSent(true);
          formRef.current?.reset();  // vide le formulaire après envoi réussi
        })
        .catch((error) => {
          console.error("Erreur d’envoi :", error);
          alert("Une erreur s'est produite, veuillez réessayer.");
        })
        .finally(() => {
          setLoading(false);
          setTimeout(() => setSent(false), 3000);
        });
    };
  
    return (
      <SectionContact id="contact">
        <Titre>Contact</Titre>
        <Description>
          N'hésitez pas à me contacter via ce formulaire. Je vous répondrai dès que possible.
        </Description>
        <Formulaire ref={formRef} onSubmit={handleSubmit}>
          <Input name="user_name" type="text" placeholder="Votre nom" required />
          <Input name="user_email" type="email" placeholder="Votre email" required />
          <Textarea name="message" rows={5} placeholder="Votre message" required />
          <SubmitButton type="submit">{loading ? "Envoi..." : "Envoyer"}</SubmitButton>
          {sent && <Notification>Message envoyé avec succès !</Notification>}
        </Formulaire>
      </SectionContact>
    );
  };
  
  export default Contact;