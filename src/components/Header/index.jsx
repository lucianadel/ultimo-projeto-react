import * as S from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Header>
      <div className="container">
        <Link to="/">
          <img src="/imagens/logo-efood.svg" alt="efood" className="logo" />
        </Link>
      </div>
    </S.Header>
  );
}
