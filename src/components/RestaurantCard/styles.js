import styled from "styled-components";

export const Card = styled.article`
  background:#fff; 
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden; 
  display:flex; 
  flex-direction: column;

  img{ 
    height: 160px; 
    object-fit: cover; 
    width:100%; 
  }

  .button{
    margin: 16px;
    background: ${({ theme }) => theme.colors.primary}; 
    color:#fff; 
    padding: 10px 14px; 
    border-radius: 12px; 
    text-align:center; 
    font-weight:700; 
  }
`;

export const Info = styled.div`
  display:flex; 
  align-items:center; 
  justify-content:space-between; 
  padding: 14px 16px 0; 
  gap: 10px;

  strong{ display:block; font-size: 18px; }
  span{ color:#666; }
  small{ color:#999; }
`;
