import styled from "styled-components";

export const Hero = styled.section`
  background: url('/images/banner-hero.jpg') center/cover no-repeat;
  color: #fff;
  
  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 100px 24px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 8px;
    text-shadow: 0 3px 10px rgba(0,0,0,.4);
  }

  p {
    font-size: 18px;
    opacity: .95;
  }
`;

export const Section = styled.section`
  .container{ 
    max-width: var(--container); 
    margin: 0 auto; 
    padding: 32px 24px; 
  }
  
  h2{ 
    margin: 0 0 16px; 
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Grid = styled.div`
  display: grid; 
  grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) ); 
  gap: 20px;
`;
