import { useState, useEffect } from "react";
import { Container } from './style'

const RandomPhrase = () => {
  const [phrase, setPhrase] = useState<string>("");

  useEffect(() => {
    async function fetchRandomPhrase() {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        const randomPhrase = data.content;
        setPhrase(randomPhrase);
      } catch (error) {
        console.error("Erro ao buscar citação:", error);
      }
    }
    fetchRandomPhrase();
  }, []);

  return (
    <Container>
      <p>{phrase}</p>
    </Container>
  );
};

export default RandomPhrase;
