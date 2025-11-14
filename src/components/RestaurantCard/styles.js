import styled from "styled-components";

export const Card = styled.article`
  background: #fff;
  border: 1px solid #e5e5e5; /* igual ao Figma */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* sombra leve do Figma */
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .button {
    margin: 16px;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 10px 14px;
    border-radius: 4px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    display: block;
  }
`;

export const Info = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 18px;
    display: block;
    margin-bottom: 4px;
  }

  span {
    color: #777;
    font-size: 14px;
  }

  small {
    color: #999;
    font-size: 12px;
    text-align: right;
    display: block;
  }
`;
