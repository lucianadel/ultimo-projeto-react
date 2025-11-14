import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0 120px;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 16px; /* igual ao Figma */
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #4b4b4b;
    letter-spacing: -1px; /* igual ao Figma */
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; /* igual ao Figma */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;
