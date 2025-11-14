import * as S from "./styles";

export default function Home() {
  return (
    <>
      <S.Hero bg="/imagens/banner-hero.jpg">
        <div className="container">
          <h1>Descubra restaurantes incríveis</h1>
          <p>Peça seus pratos favoritos e receba em casa</p>
        </div>
      </S.Hero>
    </>
  );
}
