import styled from "styled-components";

export const Hero = styled.section`
  background: url("/imagens/banner-hero.jpg") center center / cover no-repeat;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 120px 24px 140px; /* topo, lados, baixo */
  }

  h1 {
    font-size: 48px;
    line-height: 1.1;
    max-width: 560px;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    opacity: 0.95;
  }
`;

export const Section = styled.section`
  padding: 48px 0 72px;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 cards por linha, igual ao Figma */
  gap: 24px;
`;
