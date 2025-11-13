import styled from "styled-components";

export const Banner = styled.header`
  background: url(${(props) => props.bg}) center/cover no-repeat;
  padding: 80px 0;
  color: #fff;
  text-shadow: 0 3px 10px rgba(0,0,0,.4);

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 6px;
  }

  p {
    font-size: 20px;
    opacity: 0.9;
  }
`;

export const Section = styled.section`
  padding: 40px 0;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;

export const DishCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    margin: 6px 0 10px;
    color: #666;
  }

  span {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;
