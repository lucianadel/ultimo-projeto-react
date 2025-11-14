
import styled from "styled-components";

export const Header = styled.header`
  background: #fff;
  height: 64px; /* altura igual ao Figma */
  border-bottom: 1px solid #ececec;
  display: flex;
  align-items: center;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px; /* igual ao Figma (margem padrão lateral) */
  }

  .logo {
    height: 32px; /* tamanho exato do Figma */
    display: block;
  }
`;



