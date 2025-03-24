import styled from "styled-components";
import { useState } from "react";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await fetch("https://formsubmit.co/ajax/kayembajoel92@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      form.reset();
      setSent(true);
    } catch (error) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <SectionContact id="contact">
      <Titre>Contact</Titre>
      <Description>
        N'hésitez pas à me contacter via ce formulaire. Je vous répondrai dès que possible.
      </Description>
      <Formulaire onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Votre nom" required />
        <Input name="email" type="email" placeholder="Votre email" required />
        <Textarea name="message" rows={5} placeholder="Votre message" required />
        <SubmitButton type="submit">{loading ? "Envoi..." : "Envoyer"}</SubmitButton>
        {sent && <Notification>Message envoyé avec succès !</Notification>}
      </Formulaire>
    </SectionContact>
  );
};

export default Contact;
