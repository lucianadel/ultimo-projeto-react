import * as S from "./styles";
import { Link } from "react-router-dom";

export default function RestaurantCard({ item }) {
  return (
    <S.Card>
      <img src={item.cover} alt={item.name} />

      <S.Info>
        <h3>{item.title}</h3>

        <div className="details">
          <span>{item.category}</span>
          <span>•</span>
          <span>⭐ {item.rating}</span>
        </div>

        <Link to={`/restaurant/${item.id}`} className="button">
          Ver detalhes
        </Link>
      </S.Info>
    </S.Card>
  );
}
