import styled from "styled-components";

export const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #eee;
  padding: 20px 0;

  .container {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 24px;
  }
`;

export const Brand = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

