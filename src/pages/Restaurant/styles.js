import styled from "styled-components";

export const Banner = styled.header`
  background: url(${(props) => props.bg}) center center / cover no-repeat;
  height: 280px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 40px;
  color: #fff;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 4px;
  }

  p {
    font-size: 18px;
    opacity: 0.9;
  }
`;

export const Section = styled.section`
  padding: 48px 0;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 por linha igual ao Figma */
  gap: 24px;
`;

export const DishCard = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    line-height: 1.4;

    /* limita a 3 linhas */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-top: auto;
  }
`;
