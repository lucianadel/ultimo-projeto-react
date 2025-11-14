import * as S from "./styles";
import { Link } from "react-router-dom";

export default function RestaurantCard({ item }) {
  return (
    <S.Card>
      <img src={item.cover} alt={item.name} />

      <S.Info>
        <div>
          <strong>{item.name}</strong>
          <span>{item.category} • ⭐ {item.rating}</span>
        </div>

        <small>{item.fee} • {item.time}</small>
      </S.Info>

      <Link to={`/restaurant/${item.id}`} className="button">
        Ver detalhes
      </Link>
    </S.Card>
  );
}
