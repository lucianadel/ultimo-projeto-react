import styled from "styled-components";

export const Hero = styled.section`
  background: url(${(props) => props.bg}) center/cover no-repeat;
  height: 360px;
  display: flex;
  align-items: center;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
    color: #fff;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  }

  h1 {
    font-size: 48px;
    line-height: 1.1;
    font-weight: 700;
  }

  p {
    margin-top: 12px;
    font-size: 20px;
    opacity: 0.9;
  }
`;
