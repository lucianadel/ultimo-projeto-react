import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 200px; /* igual Figma */
    object-fit: cover;
  }
`;

export const Info = styled.div`
  padding: 20px;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #4b4b4b; /* Figma */
  }

  .details {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #6b6b6b;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .button {
    display: block;
    width: 100%;
    text-align: center;
    padding: 14px 0;
    background: #e66767; /* vermelho oficial do Figma */
    color: #fff;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s ease;

    &:hover {
      background: #cc5858; /* hover igual */
    }
  }
`;
