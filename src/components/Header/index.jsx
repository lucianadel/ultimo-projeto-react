import * as S from "./styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Wrapper>
      <div className="container">
        <Link to="/">
          <S.Brand>efood</S.Brand>
        </Link>
      </div>
    </S.Wrapper>
  );
}

